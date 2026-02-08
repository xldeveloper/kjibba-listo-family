import { NextRequest, NextResponse } from "next/server";
import * as admin from "firebase-admin";

// Initialize Firebase Admin SDK
function initFirebaseAdmin() {
    if (admin.apps.length === 0) {
        const projectId = process.env.FIREBASE_PROJECT_ID;
        const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL;
        const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n");

        if (!projectId || !clientEmail || !privateKey) {
            throw new Error("Missing Firebase Admin env vars");
        }

        admin.initializeApp({
            credential: admin.credential.cert({
                projectId,
                clientEmail,
                privateKey,
            }),
        });
    }
    return admin.firestore();
}

const ADMIN_EMAILS = ["kjibba@gmail.com"];

/**
 * POST /api/admin/fix-journey
 * 
 * Body: 
 * {
 *   "adminEmail": "kjibba@gmail.com",
 *   "action": "fix" | "verify" | "dry-run"
 * }
 */
export async function POST(request: NextRequest) {
    try {
        const { adminEmail, action = "dry-run" } = await request.json();
        
        // Verify admin
        if (!adminEmail || !ADMIN_EMAILS.includes(adminEmail)) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
        }
        
        const db = initFirebaseAdmin();
        console.log(`🔐 Admin ${adminEmail} triggered journey migration: ${action}`);
        
        if (action === "verify") {
            // Just check consistency without fixing
            const result = await verifyJourneyConsistencyAdmin(db);
            
            return NextResponse.json({
                success: true,
                action: "verify",
                result,
                message: `Found ${result.inconsistent} users with journey inconsistencies`
            });
        } else {
            // Fix (or dry-run)
            const dryRun = action === "dry-run";
            const result = await fixJourneyConsistencyAdmin(db, dryRun);
            
            return NextResponse.json({
                success: true,
                action: dryRun ? "dry-run" : "fix",
                result,
                message: dryRun 
                    ? `DRY RUN: Would fix ${result.fixedFamily + result.fixedOnboarding + result.fixedMultiple} issues`
                    : `Fixed ${result.fixedFamily + result.fixedOnboarding + result.fixedMultiple} issues`
            });
        }
    } catch (error: any) {
        console.error("❌ Migration failed:", error);
        return NextResponse.json({ 
            error: error.message,
            stack: error.stack 
        }, { status: 500 });
    }
}

/**
 * GET /api/admin/fix-journey
 * 
 * Returns current migration status
 */
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const adminEmail = searchParams.get("adminEmail");
    
    if (!adminEmail || !ADMIN_EMAILS.includes(adminEmail)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }
    
    try {
        const db = initFirebaseAdmin();
        const result = await verifyJourneyConsistencyAdmin(db);
        
        return NextResponse.json({
            success: true,
            result,
            needsMigration: result.inconsistent > 0
        });
    } catch (error: any) {
        return NextResponse.json({ 
            error: error.message 
        }, { status: 500 });
    }
}

// ─── Admin SDK Migration Functions ────────────────────────────

interface MigrationResult {
    totalUsers: number;
    fixedFamily: number;
    fixedOnboarding: number;
    fixedMultiple: number;
    errors: number;
    errorDetails: Array<{userId: string, error: string}>;
}

async function fixJourneyConsistencyAdmin(
    db: admin.firestore.Firestore,
    dryRun: boolean = false
): Promise<MigrationResult> {
    const usersRef = db.collection("users");
    const snapshot = await usersRef.get();
    
    const result: MigrationResult = {
        totalUsers: snapshot.size,
        fixedFamily: 0,
        fixedOnboarding: 0,
        fixedMultiple: 0,
        errors: 0,
        errorDetails: [],
    };
    
    console.log(`\n🔍 Starting journey consistency check (${dryRun ? 'DRY RUN' : 'LIVE'})`);
    console.log(`📊 Total users to check: ${result.totalUsers}\n`);
    
    for (const userDoc of snapshot.docs) {
        const data = userDoc.data();
        const userId = userDoc.id;
        const updateData: any = {};
        const issues: string[] = [];
        
        // Issue 1: familyId without journey tracking
        if (data.familyId && !data.journey?.familyCreatedAt && !data.journey?.familyJoinedAt) {
            const timestamp = data.joinedAt || data.createdAt;
            updateData["journey.familyCreatedAt"] = timestamp;
            issues.push(`Family (${data.familyName})`);
            result.fixedFamily++;
        }
        
        // Issue 2: onboarding.isComplete without journey tracking
        if (data.onboarding?.isComplete && !data.journey?.onboardingCompletedAt) {
            const timestamp = data.onboarding.completedAt || data.createdAt;
            updateData["journey.onboardingCompletedAt"] = timestamp;
            updateData["journey.onboardingSkipped"] = false;
            issues.push('Onboarding');
            result.fixedOnboarding++;
        }
        
        // Issue 3: Ensure journey object exists
        if (!data.journey) {
            updateData.journey = {
                betaInterestId: null,
                betaInterestAt: null,
                source: "app_direct",
                registeredAt: data.createdAt,
                registrationSource: "web",
                androidBetaInviteSent: false,
                androidBetaInviteSentAt: null,
                appFirstOpenAt: null,
                appPlatform: null,
                appVersion: null,
                onboardingStartedAt: null,
                onboardingCompletedAt: null,
                onboardingSkipped: false,
                familyCreatedAt: null,
                familyJoinedAt: null,
            };
            issues.push('Journey object missing');
            result.fixedMultiple++;
        }
        
        // Apply updates
        if (Object.keys(updateData).length > 0) {
            const email = data.email || userId;
            const issueText = issues.join(', ');
            
            if (dryRun) {
                console.log(`🔧 [DRY RUN] Would fix: ${email} - Issues: ${issueText}`);
            } else {
                try {
                    await userDoc.ref.update(updateData);
                    console.log(`✅ Fixed: ${email} - Issues: ${issueText}`);
                } catch (error: any) {
                    result.errors++;
                    const errorMsg = error.message || String(error);
                    result.errorDetails.push({ userId, error: errorMsg });
                    console.error(`❌ Failed to fix ${email}:`, errorMsg);
                }
            }
        }
    }
    
    console.log(`\n\n📊 Migration Summary:`);
    console.log(`════════════════════════════════════════`);
    console.log(`Total users checked:      ${result.totalUsers}`);
    console.log(`Family issues fixed:      ${result.fixedFamily}`);
    console.log(`Onboarding issues fixed:  ${result.fixedOnboarding}`);
    console.log(`Multiple issues fixed:    ${result.fixedMultiple}`);
    console.log(`Errors:                   ${result.errors}`);
    
    if (result.errors > 0) {
        console.log(`\n❌ Errors encountered:`);
        result.errorDetails.forEach(({ userId, error }) => {
            console.log(`  - ${userId}: ${error}`);
        });
    }
    
    if (dryRun) {
        console.log(`\n⚠️  This was a DRY RUN. No changes were made.`);
        console.log(`Run with dryRun=false to apply fixes.`);
    } else {
        console.log(`\n✅ Migration complete!`);
    }
    
    return result;
}

async function verifyJourneyConsistencyAdmin(
    db: admin.firestore.Firestore
): Promise<{
    consistent: number;
    inconsistent: number;
    issues: Array<{userId: string, email: string, problem: string}>;
}> {
    const usersRef = db.collection("users");
    const snapshot = await usersRef.get();
    
    const result = {
        consistent: 0,
        inconsistent: 0,
        issues: [] as Array<{userId: string, email: string, problem: string}>,
    };
    
    for (const userDoc of snapshot.docs) {
        const data = userDoc.data();
        const userId = userDoc.id;
        const email = data.email || userId;
        let hasIssue = false;
        
        // Check family consistency
        if (data.familyId && !data.journey?.familyCreatedAt && !data.journey?.familyJoinedAt) {
            result.issues.push({
                userId,
                email,
                problem: `Has familyId (${data.familyId}) but no journey tracking`
            });
            hasIssue = true;
        }
        
        // Check onboarding consistency
        if (data.onboarding?.isComplete && !data.journey?.onboardingCompletedAt) {
            result.issues.push({
                userId,
                email,
                problem: 'Onboarding complete but no journey.onboardingCompletedAt'
            });
            hasIssue = true;
        }
        
        // Check journey object exists
        if (!data.journey) {
            result.issues.push({
                userId,
                email,
                problem: 'Missing journey object entirely'
            });
            hasIssue = true;
        }
        
        if (hasIssue) {
            result.inconsistent++;
        } else {
            result.consistent++;
        }
    }
    
    return result;
}

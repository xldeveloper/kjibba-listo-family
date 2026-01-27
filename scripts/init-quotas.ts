/**
 * Initialize Firestore quotas document for Early Adopter program
 * 
 * MANUAL SETUP (Firebase Console):
 * 
 * 1. Go to Firebase Console: https://console.firebase.google.com/project/listo-6443c/firestore
 * 2. Navigate to: onboarding_config collection
 * 3. Create document with ID: quotas
 * 4. Add fields:
 *    - earlyAdopters (map):
 *        - claimed: 0 (number)
 *        - total: 50 (number)
 *    - foundersPass (map):
 *        - sold: 0 (number)
 *        - total: 300 (number)
 *    - updatedAt: Current timestamp
 * 
 * ALTERNATIVE (if you have Firebase Admin SDK access):
 * Run with: npx ts-node scripts/init-quotas.ts
 */

import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

async function initializeQuotas() {
  console.log('🔄 Initializing quotas document...');

  try {
    // Check if Firebase Admin is already initialized
    if (getApps().length === 0) {
      console.log('⚠️  No Firebase Admin app found. Options:');
      console.log('');
      console.log('1. Use Firebase Console (Recommended):');
      console.log('   - Go to: https://console.firebase.google.com/project/listo-6443c/firestore');
      console.log('   - Collection: onboarding_config');
      console.log('   - Document ID: quotas');
      console.log('   - Fields:');
      console.log('     • earlyAdopters: { claimed: 0, total: 50 }');
      console.log('     • foundersPass: { sold: 0, total: 300 }');
      console.log('     • updatedAt: [Current timestamp]');
      console.log('');
      console.log('2. Set GOOGLE_APPLICATION_CREDENTIALS:');
      console.log('   export GOOGLE_APPLICATION_CREDENTIALS="path/to/service-account-key.json"');
      console.log('');
      process.exit(1);
    }

    const db = getFirestore();
    const quotasRef = db.collection('onboarding_config').doc('quotas');

    await quotasRef.set({
      earlyAdopters: {
        claimed: 0,
        total: 50
      },
      foundersPass: {
        sold: 0,
        total: 300
      },
      updatedAt: new Date()
    });

    console.log('✅ Quotas document initialized successfully');
    console.log('📊 Early Adopter spots: 0/50');
    console.log('💎 Founders Pass available: 0/300');
  } catch (error) {
    console.error('❌ Error initializing quotas:', error);
    process.exit(1);
  }

  process.exit(0);
}

initializeQuotas();

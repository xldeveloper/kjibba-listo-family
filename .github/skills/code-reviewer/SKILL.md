---
name: code-reviewer
description: Senior developer code review skill. Use when reviewing code for quality, security, performance, and best practices. Triggers on code changes, PR reviews, or explicit review requests.
---

# Code Reviewer

Act as a **senior developer** performing thorough code review. Focus on correctness, security, performance, and maintainability.

---

## 🤖 When to Activate

Automatically engage this skill when:
- User asks for code review
- Viewing recently changed files
- Before commits or deployments
- When identifying potential issues

---

## Review Categories

### 🔴 Critical (Must Fix)
- Security vulnerabilities (hardcoded secrets, missing auth)
- Runtime errors (undefined access, type mismatches)
- Data loss risks (missing cascade handling, unsafe deletes)

### 🟡 Warning (Should Fix)
- Missing error handling
- `any` types without justification
- Missing loading/error states
- Performance anti-patterns (N+1, missing memoization)

### 🟢 Suggestion (Consider)
- Code style improvements
- Better naming
- Refactoring opportunities
- Documentation gaps

---

## TypeScript Review

### Check for:

```typescript
// ❌ any type
function process(data: any) { }

// ✅ Proper typing
function process(data: FormData) { }
```

```typescript
// ❌ Missing return type
function calculate(items) {
    return items.reduce((sum, i) => sum + i.price, 0);
}

// ✅ Explicit return type
function calculate(items: Item[]): number {
    return items.reduce((sum, i) => sum + i.price, 0);
}
```

```typescript
// ❌ Unused imports
import { useState, useEffect, useCallback } from "react";
// Only useState is used

// ✅ Clean imports
import { useState } from "react";
```

---

## React Component Review

### Client vs Server

```tsx
// ❌ useState in server component
export default function Page() {
    const [data, setData] = useState([]); // Error!
}

// ✅ Add "use client" directive
"use client";
export default function Page() {
    const [data, setData] = useState([]);
}
```

### Hooks Rules

```tsx
// ❌ Conditional hooks
if (isLoggedIn) {
    useEffect(() => { }, []);
}

// ✅ Always call hooks at top level
useEffect(() => {
    if (isLoggedIn) { /* ... */ }
}, [isLoggedIn]);
```

### UI Components

```tsx
// ❌ Inline styling
<button className="bg-primary-500 text-white px-4 py-2 rounded">
    Save
</button>

// ✅ Use UI components
import { Button } from "@/components/ui";
<Button variant="primary">Save</Button>
```

---

## API Route Review

### Authentication

```typescript
// ❌ Missing auth check
export async function GET() {
    const data = await prisma.form.findMany();
    return NextResponse.json(data);
}

// ✅ Always verify session
export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const data = await prisma.form.findMany();
    return NextResponse.json(data);
}
```

### Error Handling

```typescript
// ❌ No try-catch
export async function POST(req: NextRequest) {
    const body = await req.json();
    const result = await prisma.form.create({ data: body });
    return NextResponse.json(result);
}

// ✅ Proper error handling
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const result = await prisma.form.create({ data: body });
        return NextResponse.json(result);
    } catch (error) {
        console.error("Create form error:", error);
        return NextResponse.json(
            { error: "Failed to create form" },
            { status: 500 }
        );
    }
}
```

### Input Validation

```typescript
// ❌ No validation
const { email, name } = await req.json();
await prisma.user.create({ data: { email, name } });

// ✅ Validate input
import { z } from "zod";

const schema = z.object({
    email: z.string().email(),
    name: z.string().min(1).max(255),
});

const result = schema.safeParse(await req.json());
if (!result.success) {
    return NextResponse.json({ error: result.error.issues }, { status: 400 });
}
await prisma.user.create({ data: result.data });
```

---

## Security Review

### Credentials

```typescript
// ❌ CRITICAL: Hardcoded secrets
const API_KEY = "sk_live_abc123";

// ✅ Environment variables
const API_KEY = process.env.API_KEY;
```

### Password Exposure

```typescript
// ❌ Returning password hash
const user = await prisma.user.findUnique({ where: { id } });
return NextResponse.json(user); // Includes passwordHash!

// ✅ Select only needed fields
const user = await prisma.user.findUnique({
    where: { id },
    select: { id: true, name: true, email: true, role: true },
});
return NextResponse.json(user);
```

### Public Endpoints

```typescript
// ❌ Exposing internal IDs
return NextResponse.json({ id: form.id, customerId: form.customerId });

// ✅ Use public tokens
return NextResponse.json({ token: form.token });
```

---

## Performance Review

### Memoization

```tsx
// ❌ Recalculates every render
const sortedItems = items.sort((a, b) => a.name.localeCompare(b.name));

// ✅ Memoize expensive operations
const sortedItems = useMemo(
    () => items.sort((a, b) => a.name.localeCompare(b.name)),
    [items]
);
```

### Dependency Arrays

```tsx
// ❌ Missing dependencies
useEffect(() => {
    fetchData(userId);
}, []); // userId not in deps

// ✅ Include all dependencies
useEffect(() => {
    fetchData(userId);
}, [userId]);
```

### N+1 Queries

```typescript
// ❌ N+1 query pattern
const forms = await prisma.form.findMany();
for (const form of forms) {
    form.customer = await prisma.customer.findUnique({
        where: { id: form.customerId }
    });
}

// ✅ Use include
const forms = await prisma.form.findMany({
    include: { customer: true }
});
```

---

## Code Style Review

### Import Order
1. External packages (react, next)
2. Internal absolute (@/...)
3. Internal relative (./, ../)
4. Types

### Naming
- Components: `PascalCase` → `JobEditModal.tsx`
- Functions: `camelCase` → `formatDate()`
- Constants: `UPPER_SNAKE_CASE` → `MAX_FILE_SIZE`
- Booleans: `is/has/should` prefix → `isLoading`

### File Size
- Target: < 300 lines
- If larger: Split into smaller modules

---

## Review Output Format

When performing a review, output in this format:

```markdown
## Code Review: `filename.tsx`

### 🔴 Critical Issues
1. **[Security]** Hardcoded API key on line 15
   - Fix: Move to `.env` as `API_KEY`

### 🟡 Warnings
1. **[TypeScript]** `any` type on line 42
   - Fix: Define interface for `FormData`

2. **[Performance]** Missing memoization for expensive sort
   - Fix: Wrap in `useMemo`

### 🟢 Suggestions
1. **[Style]** Consider extracting validation to separate function
2. **[Naming]** `data` is too generic, consider `formSubmissions`

### ✅ Good Practices Observed
- Proper error handling in API routes
- Consistent use of UI components
```

---

## Quick Checklist

Before approving code:

- [ ] No TypeScript errors
- [ ] No `any` types (unless justified)
- [ ] All API routes have auth checks
- [ ] Error handling with try-catch
- [ ] Input validation for user data
- [ ] No hardcoded secrets
- [ ] Proper loading/error states
- [ ] UI components used (no inline Tailwind for buttons/inputs)
- [ ] Dependencies in useEffect arrays
- [ ] No N+1 queries
- [ ] Descriptive variable names
- [ ] Files under 300 lines

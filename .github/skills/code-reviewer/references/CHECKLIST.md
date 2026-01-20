# Code Review Checklist

Quick reference for manual code reviews.

---

## TypeScript
- [ ] No `any` types
- [ ] All functions have return types
- [ ] No unused imports

## React
- [ ] `"use client"` where hooks are used
- [ ] Hooks called at top level (not conditional)
- [ ] UI components from `@/components/ui`

## API Routes
- [ ] Auth check with `getServerSession`
- [ ] Role check for sensitive operations
- [ ] Try-catch error handling
- [ ] Input validation (Zod preferred)

## Security
- [ ] No hardcoded credentials
- [ ] Passwords never in response
- [ ] Internal IDs not exposed publicly
- [ ] File uploads validated

## Performance
- [ ] `useMemo` for expensive calculations
- [ ] `useEffect` deps complete
- [ ] No N+1 queries (`include` instead)

## Style
- [ ] Descriptive variable names
- [ ] Imports ordered correctly
- [ ] Files < 300 lines
- [ ] Strings from `strings.ts`

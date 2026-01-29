# Listo Landing Page - AI Coding Instructions

## Project Overview
Norwegian (nb) landing page for listo.family - a family assistant app for meal planning, shopping lists, and task management. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

**Live site:** https://listo.family

## 🚨 PRE-WORK CHECKLIST (MANDATORY - IKKE START FØR DETTE ER GJORT!)

Before writing ANY code or making ANY changes, complete this checklist IN ORDER:

### 1. 🤖 Agents & Skills Check
- [ ] **Check for relevant agents** in `.github/agents/` (e.g., `seo-specialist`, `frontend-developer`)
- [ ] **Check for relevant skills** in `.github/skills/` (e.g., `nextjs-best-practices`, `seo-fundamentals`, `tailwind-patterns`)
- [ ] **Read and apply** the skill file using `read_file` before proceeding
- [ ] **Announce to user** which agents/skills are being used:
  - Example: "📋 **Using skills:** `nextjs-best-practices`, `seo-fundamentals` | **Suggested agent:** `seo-specialist`"
- [ ] If a specialized agent would be better suited, **STOP and suggest switching** - wait for confirmation

### 2. 🔍 Listo Codebase MCP (Sjekk om koden allerede finnes!)
Before implementing features or modifying code:

**Check if code already exists:**
```typescript
mcp_listo-codebas_find_similar_code("feature_keyword", "all")
mcp_listo-codebas_check_feature_exists("beskrivelse av hva du leter etter")
```
→ **Hvis noe finnes:** Gjenbruk det! Ikke skriv ny kode.

**Understand existing patterns:**
```typescript
mcp_listo-codebas_get_project_patterns("components" eller "services")
mcp_listo-codebas_check_translations("keyword", "namespace")
```

**Check for breaking changes:**
```typescript
mcp_listo-codebas_find_usages("functionName")
```

**Read resources:**
- `listo://coding-guidelines`
- `listo://services-overview`

### 3. 📚 Context7 MCP (Oppdatert dokumentasjon for eksterne biblioteker)
When working with **external libraries** (Next.js, Tailwind CSS, Framer Motion, etc.):

**ALWAYS use Context7 MCP to avoid deprecated patterns:**
```typescript
// First: Find the library
mcp_io_github_ups_resolve-library-id("library-name")

// Then: Get latest docs
mcp_io_github_ups_get-library-docs(
  context7CompatibleLibraryID: "/org/project",
  topic: "specific-feature",
  mode: "code" // or "info" for conceptual guides
)
```

**When to use:**
- ✅ Using Next.js App Router features
- ✅ Implementing Tailwind CSS patterns
- ✅ Adding Framer Motion animations
- ✅ Debugging library-specific errors
- ✅ Learning new framework features

**Why this matters:**
- Frameworks update frequently - your training data may be outdated
- Prevents using deprecated patterns
- Gets correct API signatures and best practices
- Reduces trial-and-error debugging

---

**⚠️ DO NOT START CODING until you've completed steps 1-3 above!**

This ensures:
- ✅ Consistent patterns and domain expertise
- ✅ No duplicate code
- ✅ No breaking changes
- ✅ Current, non-deprecated APIs

## Branding & Naming Convention
- **Formal branding:** Use `listo.family` (lowercase) in titles, metadata, CTAs, logos, and marketing copy
- **Casual references:** `Listo` is acceptable in flowing body text where natural
- **Author attribution:** Use `Listo-teamet` in blog author sections
- **CSS/code identifiers:** Keep as-is (e.g., `listo-500`, `bg-listo-100` - these are internal class names)
- **Firebase project IDs:** Keep as-is (e.g., `listo-6443c`)

## Terminal Usage
**IMPORTANT:** Do not write to or interact with terminals that have running processes (e.g., `npm run dev`, `npm run build`). Wait for the process to complete before sending new commands.

**⚠️ CRITICAL: Git & Deployment Policy (NON-NEGOTIABLE)**
- **ALWAYS ASK before committing/pushing to `main` branch**
- `main` branch auto-deploys to production immediately via server monitoring
- Production bugs affect real users - TEST thoroughly before pushing
- Only push to `main` for:
  - Critical hotfixes (security, crashes, data loss)
  - Explicitly approved changes by user
  - Minor documentation/content updates
- When uncertain, commit to separate branch and wait for user review

## Design System & Brand Colors
Follow the "Friendly Softness" philosophy documented in the design philosophy file. Use warm, rounded visuals - no sharp corners.

**Color Palette:**
- `cream-50` (`#FFFAF5`) - Background
- `charcoal` (`#34495E`) - Primary text, strokes
- `salmon-500` (`#FF8C69`) - Food/meal features, CTAs
- `listo-500` (`#2ECC71`) - Success, action states
- `sky-400` (`#5DADE2`) - Logistics, links
- `magic-500` (`#9B59B6`) - AI features (use ✨ sparkle icon)

Use Tailwind classes defined in the config: `bg-cream-50`, `text-charcoal`, `text-salmon-500`, etc.

## Component Patterns

### Section Structure
Each landing page section follows this pattern (see Features component):
```tsx
<section className="py-24 bg-white">  {/* or bg-cream-50 */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header with badge, title, subtitle */}
    <span className="inline-block px-4 py-1.5 bg-listo-100 text-listo-700 rounded-full text-sm font-medium mb-4">
      Section Label
    </span>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">...</h2>
    {/* Content grid */}
  </div>
</section>
```

### Interactive Elements
- Buttons: `rounded-full` with gradient backgrounds, hover shadow effects
- Cards: `rounded-squircle` (custom 1.5rem radius), hover lift effect
- Icons: Use Lucide React, colored by feature domain (salmon=food, magic=AI, listo=success)

### Client vs Server Components
- Default to server components (no directive)
- Add `"use client"` only for: Framer Motion animations, interactive elements, event handlers
- See Hero component for client component pattern

## Blog Articles
Blog posts live in the blogg directory with dynamic routes. Article metadata defined inline in the blog page. Each article page exports:
- `metadata` object for SEO
- `jsonLd` structured data for Google
- Article content with consistent heading hierarchy

## Key Commands
```bash
npm run dev    # Start dev server at localhost:3000
npm run build  # Build for production (standalone output)
npm run lint   # Run ESLint
```

## Deployment
Deployed via Docker to Hetzner. From NyeListo repo: `.\update-server.ps1 -LandingOnly`

## Language & Content
All user-facing content is in **Norwegian (Bokmål)**. Maintain this consistency:
- Page lang: `<html lang="nb">`
- Dates: `nb-NO` locale formatting
- SEO metadata in Norwegian

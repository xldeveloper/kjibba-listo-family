---
name: offline-first-pwa-patterns
description: Strategies for building robust offline-first Progressive Web Apps for field technicians.
---

# Offline-First PWA Patterns

Field technicians often work in locations with poor or no internet connectivity (basements, remote areas). This skill ensures Digital Befaring remains functional without a network.

## Core Strategy

### 1. Persistent Storage (IndexedDB/WOP)
- Use **IndexedDB** for large data sets (customer lists, previous surveys).
- For Next.js/React, consider libraries like `Dexie.js` or `Zustand` with persistent middleware.

### 2. Service Workers (Next-PWA)
- **Cache-first strategy:** For static assets (icons, UI components).
- **Stale-while-revalidate:** For dynamic but non-critical data.
- **Network-only (with fallback):** For critical submissions.

## Data Synchronization

### The Outbox Pattern
1. User saves a form while offline.
2. Form is stored in local **IndexedDB "Outbox"**.
3. Service Worker listens for `online` event.
4. Background sync process pushes pending items to the API.

### Conflict Resolution
- **Last Write Wins (LWW):** Simple, but risky.
- **Version Tracking:** Check `updatedAt` before overwriting.
- **User Intervention:** If a conflict occurs, mark status as "Conflict" and ask the technician to choose which version to keep.

## UI/UX for Offline State
- **Visual Indicators:** Always show a subtle indicator when the app is offline.
- **Status Badges:** "Venter på nett" (Waiting for network) for pending uploads.
- **Optimistic UI:** Update local state immediately, then sync in background.

## Next.js Implementation Note
- Use `next-pwa` plugin in `next.config.js`.
- Ensure `manifest.json` and icons are correctly configured.
- Handle "Add to Home Screen" (A2HS) prompts to make it feel like a native app.

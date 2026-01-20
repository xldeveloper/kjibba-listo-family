# NyeListo Development Guidelines

Auto-generated from all feature plans. Last updated: 2025-12-22

## Active Technologies
- TypeScript 5.x, React Native (Expo SDK 52+) + expo-localization, i18n-js, date-fns (already installed) (001-i18n-support)
- AsyncStorage (local cache) + Firestore (cross-device sync) (001-i18n-support)
- TypeScript 5.x (Next.js 14), Node.js 18+ (API server) + Next.js 14, React 18, Tailwind CSS, Express.js, Google Gemini, better-sqlite3 (003-support-chatbot)
- SQLite (knowledge.db for embeddings), Firestore (escalations, analytics) (003-support-chatbot)
- TypeScript 5.x (React Native/Expo SDK 52+) + Expo Router v3, NativeWind v4, react-native-reanimated, Firebase (Auth, Firestore) (004-onboarding-v2)
- Firestore (Family document with preferences, User document with onboarding progress) (004-onboarding-v2)
- TypeScript 5.x (strict mode), React Native via Expo SDK 52+ + React Native, Expo Router, NativeWind v4, Firebase Firestore, RevenueCat SDK, i18n-js (006-premium-limits)
- Firestore (usage tracking under `families/{familyId}/usage/`), RevenueCat (premium status via webhook) (006-premium-limits)

- (001-migrate-ai-server)

## Project Structure

```text
src/
tests/
```

## Commands

# Add commands for 

## Code Style

: Follow standard conventions

## Recent Changes
- 006-premium-limits: Added TypeScript 5.x (strict mode), React Native via Expo SDK 52+ + React Native, Expo Router, NativeWind v4, Firebase Firestore, RevenueCat SDK, i18n-js
- 004-onboarding-v2: Added TypeScript 5.x (React Native/Expo SDK 52+) + Expo Router v3, NativeWind v4, react-native-reanimated, Firebase (Auth, Firestore)
- 003-support-chatbot: Added TypeScript 5.x (Next.js 14), Node.js 18+ (API server) + Next.js 14, React 18, Tailwind CSS, Express.js, Google Gemini, better-sqlite3


<!-- MANUAL ADDITIONS START -->
<!-- MANUAL ADDITIONS END -->

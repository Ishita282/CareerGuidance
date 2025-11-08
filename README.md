# Career Guidance (Web App)

**Domain:** Education  
**Tech:** HTML, CSS, JavaScript, Firebase (Auth, Firestore, Hosting)  
**Difficulty:** Medium

## Overview
A simple Career Guidance app to help students find colleges (India & Abroad), check eligibility, take an aptitude test, and register to colleges.

## Features
- Student login & signup
- Admin-managed college database
- Career & location selection (India / Abroad)
- College listing with basic filters (fee, region, ranking)
- College registration workflow
- Aptitude Test (MCQ) with score saving
- Logging of key actions to Firestore

## Structure
See `public/` for HTML and `public/ js/` for modular JS files. LLD and architecture docs are in `lld/` and `docs/`.

## Setup
1. Create Firebase project (enable Auth + Firestore + Hosting).
2. Replace config in `public/ js/firebase-config.js`.
3. Install Firebase CLI.
4. `firebase init` (Hosting + Firestore) and `firebase deploy`.
for example: `https://career-guidance-21a8a.web.app`

## Logging
All main actions are logged to Firestore collection `logs` (timestamped). Admin can review logs.

## Testing
Manual test cases in `tests/test-cases.md`. Run through signup, aptitude test, admin actions, and list filters.

## Notes
- Keep Firebase security rules updated (see `docs/architecture.md`).
- Keep repo public per evaluation.


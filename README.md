# Innova8 Jharkhand — Functional Frontend Prototype

A React + Vite frontend for the Government of Jharkhand problem-to-solution collaboration platform.

## What works now
- Responsive multi-page React UI with React Router
- Role selection for Citizen, Student, HEI, Researcher, Industry, Startup and Government
- Demo/local login flow using browser localStorage
- Logout and dashboard session state
- Challenge search, category/status filters and URL search support
- Solution search and category filters
- Submit Challenge form with validation and local submission persistence
- Submit Solution form with validation and local submission persistence
- Dashboard reads the signed-in user's submissions and shows status
- Seed challenge/solution data stored locally and ready to replace with API calls

## Run

```bash
npm install
npm run dev
```

## Production backend integration points

Replace the helpers in `src/lib.js` with API/database calls for:
- authentication and role permissions
- challenge moderation/review
- solution evaluation
- file storage
- notifications
- teams/collaboration
- impact metrics and district analytics

This prototype intentionally uses localStorage so the complete interaction flow can be demonstrated without a backend.

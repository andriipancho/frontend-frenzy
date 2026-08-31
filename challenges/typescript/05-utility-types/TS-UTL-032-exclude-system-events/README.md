# TS-UTL-032 — Exclude system events

Derive the application event union by removing internal lifecycle events.

## Constraints

- Keep user-created and user-deleted events.
- Remove startup and shutdown events.
- Use the existing event union.

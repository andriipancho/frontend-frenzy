# TS-NAR-044 — Narrow an optional session

Return a session user ID when a session exists and a fallback when it does not.

## Constraints

- Keep the nullable session type.
- Check presence before reading properties.
- Return a string.

# TS-CORE-028 — Correct a user profile shape

A user profile stores an identifier and a display name as text, and records
whether the account is currently active. That last one is a flag: it has exactly
two states and nothing in between. Correct `UserProfile` so every property
describes the value it actually holds.

## Constraints

- Keep all three property names.
- Use primitive property types.
- Do not make required fields optional.

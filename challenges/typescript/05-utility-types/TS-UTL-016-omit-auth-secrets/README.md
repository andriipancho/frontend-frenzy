# TS-UTL-016 — Remove authentication secrets

Create a serializable session view without tokens or the server-only signature.

## Constraints

- Remove accessToken, refreshToken, and signature.
- Preserve all other session fields.
- Do not rebuild the retained shape manually.

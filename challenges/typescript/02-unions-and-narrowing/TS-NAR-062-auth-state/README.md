# TS-NAR-062 — Model authentication states

Separate anonymous, authenticating, authenticated, and rejected authentication states.

## Constraints

- Use `status` as the discriminant.
- Require user data only after authentication.
- Require an error only for rejection.

# TS-NAR-002 — Define a user predicate

Turn `isUser` into a type guard that allows callers to safely use an unknown value as `User` after a successful check.

## Constraints

- Keep the input as `unknown`.
- Verify both required properties at runtime.
- Do not use `any`.

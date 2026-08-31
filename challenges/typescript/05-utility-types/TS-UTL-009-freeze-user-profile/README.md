# TS-UTL-009 — Return a readonly profile

Expose the result of `freezeProfile` as a readonly profile.

## Constraints

- Keep the runtime `Object.freeze` call.
- Accept a complete mutable profile.
- Prevent property assignment through the returned type.

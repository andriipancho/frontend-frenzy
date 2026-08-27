# TS-NAR-041 — Narrow a custom network failure

Read a status code only from the custom NetworkFailure subclass while accepting ordinary errors.

## Constraints

- Keep the class hierarchy.
- Return undefined for ordinary errors.
- Use runtime class identity.

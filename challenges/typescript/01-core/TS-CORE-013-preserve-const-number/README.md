# TS-CORE-013 — Preserve a const number literal

Keep the exact retry limit available in the type of `maxRetries` instead of widening it to every number.

## Constraints

- Keep the value `3`.
- Do not add an assertion.
- Let the declaration kind drive inference.

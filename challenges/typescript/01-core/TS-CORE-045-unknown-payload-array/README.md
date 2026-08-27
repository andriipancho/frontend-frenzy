# TS-CORE-045 — Contain untrusted payloads in an array

Model `PayloadQueue` so it can store arbitrary inputs without granting unsafe property access to consumers.

## Constraints

- Keep a variable-length array.
- Allow every input value.
- Do not use `any`.

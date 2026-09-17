# TS-NAR-020 — Constrain connection phases

A connection passes through `"idle"`, `"connecting"`, `"connected"`, and
`"closed"`. Restrict `ConnectionPhase` to that closed set.

## Constraints

- Keep the exported names.
- Do not use `any` or assertions.
- Accept only those four phases, exactly as written.

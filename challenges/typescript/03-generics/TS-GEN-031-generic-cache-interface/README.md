# TS-GEN-031 — Parameterize a cache interface

Make cache reads and writes share the selected value type.

## Constraints

- Keep string keys.
- Lookup may return undefined.
- Set accepts the exact cached type.

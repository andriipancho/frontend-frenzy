# TS-CORE-003 — Preserve literal values

Define `methods` so TypeScript retains the exact ordered values rather than widening them to a mutable string array.

## Constraints

- Keep the exported name and values.
- Do not write an explicit tuple type.
- The result must be readonly.

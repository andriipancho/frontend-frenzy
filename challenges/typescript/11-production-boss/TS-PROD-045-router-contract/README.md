# TS-PROD-045 — Derive a typed router contract

Compose a maintainable application-level contract from the supplied domain specification, preserving every nested relationship.

## Constraints

- Keep all supplied domain declarations and exported API names.
- Derive the public contract from the specification rather than repeating it.
- Do not use any, assertions, broad index signatures, or hard-coded example keys.

## Contract

- Each route keeps its path as the key.
- Its value carries `method`, copied from the specification, and `handle`, which takes the
  parameters parsed out of that path — each `:name` segment becoming a `string` property — and
  returns `Promise<response>`.

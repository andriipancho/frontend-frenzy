# TS-PROD-050 — Compose an application service contract

Compose a maintainable application-level contract from the supplied domain specification, preserving every nested relationship.

## Constraints

- Keep all supplied domain declarations and exported API names.
- Derive the public contract from the specification rather than repeating it.
- Do not use any, assertions, broad index signatures, or hard-coded example keys.

## Contract

- Each service keeps its name and keeps its `commands` and `queries` groups.
- A command becomes `(payload: <that command's own shape>) => Promise<void>`.
- A query becomes `(input: <its input>) => Promise<<its output>>`.

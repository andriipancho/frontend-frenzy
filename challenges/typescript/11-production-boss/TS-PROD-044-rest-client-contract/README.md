# TS-PROD-044 — Build a REST client contract

Compose a maintainable application-level contract from the supplied domain specification, preserving every nested relationship.

## Constraints

- Keep all supplied domain declarations and exported API names.
- Derive the public contract from the specification rather than repeating it.
- Do not use any, assertions, broad index signatures, or hard-coded example keys.

## Contract

- Each endpoint key keeps its name and returns `Promise<response>`, with `params` always the
  first argument.
- An endpoint whose `body` is `never` takes no body argument; any other body follows `params`.

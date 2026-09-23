# TS-PROD-028 — Parse structured cache keys

Derive a strongly typed production contract from the supplied string convention.

## Constraints

- Keep the exported type name and its generic inputs.
- Return the documented fallback for malformed input.
- Do not use any or hard-code the supplied example literals.

## Contract

- A cache key is a scope, `:`, a resource, `:`, then an id.
- The result is the readonly tuple `[scope, resource, id]`, each position labelled and holding
  its own literal; a key that is not three segments produces `never`.

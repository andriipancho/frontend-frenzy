# TS-PROD-026 — Parse namespaced event names

Derive a strongly typed production contract from the supplied string convention.

## Constraints

- Keep the exported type name and its generic inputs.
- Return the documented fallback for malformed input.
- Do not use any or hard-code the supplied example literals.

## Contract

- An event name is a domain, `.`, an entity, `.`, then an action.
- The result carries `domain`, `entity` and `action`; a name that is not three dotted segments
  produces `never`.

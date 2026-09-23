# TS-MIX-054 — Parse mixed version paths

Implement `ParseVersion` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- A versioned path is `/v`, a version number, `/`, then the resource.
- The result carries `version` as a numeric literal and `resource` as the rest of the path; a
  path without a version produces `never`.

# TS-PROD-024 — Parse a query declaration contract

Derive a strongly typed production contract from the supplied string convention.

## Constraints

- Keep the exported type name and its generic inputs.
- Return the documented fallback for malformed input.
- Do not use any or hard-code the supplied example literals.

## Contract

- A specification is a comma-separated list of `name:type` declarations.
- Each declaration becomes a property of that name; `string`, `number` and `boolean` map to
  those types, and any other type name produces `never`.

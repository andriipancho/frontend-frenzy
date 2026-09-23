# TS-PROD-023 — Infer parameters from application routes

Derive a strongly typed production contract from the supplied string convention.

## Constraints

- Keep the exported type name and its generic inputs.
- Return the documented fallback for malformed input.
- Do not use any or hard-code the supplied example literals.

## Contract

- A parameter segment starts with `:` and ends at the next `/` or at the end of the path.
- Each parameter becomes a required property typed `string`.
- A path with no parameters produces `{}`.

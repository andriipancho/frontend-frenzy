# TS-PROD-027 — Generate environment variable keys

Derive a strongly typed production contract from the supplied string convention.

## Constraints

- Keep the exported type name and its generic inputs.
- Return the documented fallback for malformed input.
- Do not use any or hard-code the supplied example literals.

## Contract

- Each key becomes the uppercased prefix, `_`, then the uppercased key.
- Values are what the environment actually holds: a `boolean` field becomes `"true" | "false"`
  and every other field becomes `string`.

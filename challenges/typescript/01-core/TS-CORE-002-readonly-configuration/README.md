# TS-CORE-002 — Update readonly configuration

Complete `withRetries` so it returns a configuration with the requested retry count without mutating the input.

## Constraints

- Keep `Config` readonly.
- Do not use assertions or remove readonly modifiers.
- Return a new object.

# TS-CORE-001 — Narrow an unknown value

Implement `toErrorMessage` so it accepts any unknown value and always returns a string. Return an `Error` message when available; otherwise use a safe string conversion.

## Constraints

- Keep the parameter typed as `unknown`.
- Do not use `any` or a type assertion.
- Narrow before reading properties.

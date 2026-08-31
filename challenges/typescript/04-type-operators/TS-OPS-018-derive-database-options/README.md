# TS-OPS-018 — Derive nested database options

Derive the database configuration shape from the root runtime configuration.

## Constraints

- Do not duplicate database properties.
- Keep the root config as the source of truth.
- Preserve ordinary widened value types.

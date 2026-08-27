# TS-GEN-097 — Preserve configuration lookups

Repair a configuration reader so each key produces its declared value type.

## Constraints

- Only configuration keys are accepted.
- Each call must preserve its selected value type.
- Do not expose a union of all configuration values.

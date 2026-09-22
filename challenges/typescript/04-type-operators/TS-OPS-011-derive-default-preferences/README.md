# TS-OPS-011 — Derive default preferences

Derive the preferences type from the runtime default value.

## Constraints

- Keep one runtime source of truth.
- Do not write a duplicate object type.
- Leave the runtime object exactly as declared — no const assertion. The derived
  type keeps ordinary widened property types and carries no readonly modifiers.

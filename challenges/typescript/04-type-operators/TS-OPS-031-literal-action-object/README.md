# TS-OPS-031 — Preserve an action discriminant

Keep the action object's discriminant and payload as exact readonly literals.

## Constraints

- Keep the runtime object shape.
- Preserve the exact `type` string.
- Make both properties readonly through inference.

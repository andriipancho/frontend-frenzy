# TS-CND-045 — Classify response statuses

Implement `StatusFamily` to classify response statuses, while preserving the generic relationships in the contract.

## Constraints

- Model the explicit status groups with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.

## Contract

The groups are explicit codes, not numeric ranges:

- `200`, `201` and `204` produce `"success"`;
- `400`, `401`, `403` and `404` produce `"client-error"`;
- `500`, `502` and `503` produce `"server-error"`;
- every other status produces `"other"`.

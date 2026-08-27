# TS-GEN-057 — Default API response payload

Give `ApiResponse` an `unknown` default while preserving an explicitly supplied payload type.

## Constraints

- Omitting the type argument must produce `unknown`.
- An explicit type argument must flow to `data`.
- Do not use `any`.

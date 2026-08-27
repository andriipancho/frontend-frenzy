# TS-GEN-093 — Preserve API route responses

Repair an API client contract so each route returns its declared response type.

## Constraints

- Only configured routes may be requested.
- The selected route must determine the Promise payload.
- Do not require assertions at call sites.

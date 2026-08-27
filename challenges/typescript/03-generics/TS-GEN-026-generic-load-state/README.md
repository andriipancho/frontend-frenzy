# TS-GEN-026 — Parameterize load state data

Make successful `LoadState<T>` values carry the selected data type.

## Constraints

- Keep every lifecycle state.
- Use T only for success data.
- Keep failure errors string.

# TS-GEN-019 — Parameterize result data

Make the successful member of `DataResult<T>` carry the supplied data type.

## Constraints

- Keep the failure member unchanged.
- Use T only for successful data.
- Preserve the discriminated union.

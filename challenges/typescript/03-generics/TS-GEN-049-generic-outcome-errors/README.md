# TS-GEN-049 — Parameterize outcome data and errors

Make `Outcome<T, E>` independently model success data and failure errors.

## Constraints

- Use T only for success.
- Use E only for failure.
- Keep the boolean discriminant.

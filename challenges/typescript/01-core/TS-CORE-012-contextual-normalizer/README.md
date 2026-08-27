# TS-CORE-012 — Type a string normalizer

Give `normalize` a precise function type so its parameter is checked and its return value remains inferred.

## Constraints

- Accept only strings.
- Keep the existing normalization chain.
- Do not use `any` or an assertion.

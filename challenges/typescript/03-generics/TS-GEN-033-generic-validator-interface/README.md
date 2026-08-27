# TS-GEN-033 — Parameterize a validator interface

Make `Validator<T>` expose a predicate that narrows unknown input to T.

## Constraints

- Keep the input unknown.
- Return a type predicate.
- Use the interface parameter as the narrowed type.

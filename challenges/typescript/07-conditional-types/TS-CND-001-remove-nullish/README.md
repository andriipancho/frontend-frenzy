# TS-CND-001 — Remove nullish members

Implement `Defined<T>` so it removes `null` and `undefined` from a type while preserving every other union member.

## Constraints

- Do not use the built-in `NonNullable` or `Exclude` utilities.
- Support union inputs.
- Preserve `false`, `0`, and empty strings.

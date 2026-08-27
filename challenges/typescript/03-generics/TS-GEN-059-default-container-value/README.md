# TS-GEN-059 — Default container value

Make `ContainerValue` use `string` when no type argument is provided.

## Constraints

- Keep string as the default.
- Preserve explicit literal types.
- Do not add another type parameter.

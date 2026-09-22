# TS-CND-079 — Map validation input types

Implement `ValidationInputs` to map validation input types, while preserving the generic relationships in the contract.

## Constraints

- Model the validation category of each field with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.

## Contract

Each field's value type decides what its validator accepts:

- a string field accepts `string`;
- a number field accepts `string` or `number`;
- a boolean field accepts `boolean`, `"true"` or `"false"`;
- every other field accepts `unknown`.

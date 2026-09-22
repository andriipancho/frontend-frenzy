# TS-CND-046 — Select an input control

Implement `InputControl` to select an input control, while preserving the generic relationships in the contract.

## Constraints

- Model the value categories supported by the form with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.

## Contract

- `string` produces `"text"`.
- `number` produces `"number"`.
- `boolean` produces `"checkbox"`.
- `Date` produces `"date"`.
- Any other value type has no control and produces `never`.

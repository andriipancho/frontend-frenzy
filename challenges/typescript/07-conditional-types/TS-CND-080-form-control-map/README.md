# TS-CND-080 — Map values to form controls

Implement `FormControls` to map values to form controls, while preserving the generic relationships in the contract.

## Constraints

- Model the control category of each field with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.

## Contract

Each field becomes `{ kind: <label>; value: <the field type> }`, where the label is
`"text"` for strings, `"number"` for numbers and `"checkbox"` for booleans.

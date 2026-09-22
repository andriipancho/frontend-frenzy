# TS-CND-096 — Derive form field configurations

Implement `FormField` to derive form field configurations, while preserving the generic relationships in the contract.

## Constraints

- Model the field value category with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.

## Contract

- A boolean field produces `{ kind: "checkbox"; initial: <the boolean literal> }`.
- A number field produces `{ kind: "number"; initial: number; step: number }`.
- A readonly list of options produces
  `{ kind: "select"; options: <the list>; selected?: <the element union> }`, with
  `selected` optional.

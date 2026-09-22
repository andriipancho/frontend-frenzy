# TS-CND-084 — Map property patch policies

Implement `PatchPolicies` to map property patch policies, while preserving the generic relationships in the contract.

## Constraints

- Model array, object, and scalar patch behavior in precedence order with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.

## Contract

Each property becomes one operation, in this order:

- an array property becomes `{ replace: <the array type> }`;
- an object property becomes `{ merge: <that object with every property optional> }`;
- anything else becomes `{ set: <the property type> }`.

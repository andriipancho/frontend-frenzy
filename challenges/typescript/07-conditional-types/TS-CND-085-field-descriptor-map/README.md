# TS-CND-085 — Map field descriptors

Implement `FieldDescriptors` to map field descriptors, while preserving the generic relationships in the contract.

## Constraints

- Model nullable and collection fields in precedence order with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.

## Contract

Each field becomes a descriptor carrying the field type as `value`, plus one marker,
in this order:

- a field that accepts `null` adds `nullable: true`;
- a readonly or mutable array field adds `collection: true`;
- every other field adds `nullable: false`.

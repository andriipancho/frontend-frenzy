# TS-CND-055 — Select serialization mode

Implement `SerializationMode` to select serialization mode, while preserving the generic relationships in the contract.

## Constraints

- Model the ordered transport value categories with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.

## Contract

In this order:

- `string` produces `"raw"`;
- `Uint8Array` produces `"binary"`;
- readonly and mutable arrays produce `"json-array"`;
- every remaining object produces `"json-object"`.

# TS-CND-094 — Select serializer contracts

Implement `Serializer` to select serializer contracts, while preserving the generic relationships in the contract.

## Constraints

- Model the value's supported wire representation with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.

## Contract

- A string value is serialized to `string`.
- A `Uint8Array` is carried on the wire unchanged, as `Uint8Array`.
- Any other object is serialized to `string`.
- Every remaining value type is unsupported and produces `never`.

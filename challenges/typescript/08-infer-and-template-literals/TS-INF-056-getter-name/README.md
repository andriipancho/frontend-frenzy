# TS-INF-056 — Generate getter names

Implement `GetterName` to generate getter names, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the property name after capitalization.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.

## Contract

- A property name produces `get` followed by that name capitalized.
- A union of property names produces the union of the generated getter names.

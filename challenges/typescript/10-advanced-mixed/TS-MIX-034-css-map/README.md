# TS-MIX-034 — Generate mixed CSS variables

Implement `CssVariables` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- Each key gains the custom-property prefix `--` and is otherwise left as written.
- The value type is unchanged.

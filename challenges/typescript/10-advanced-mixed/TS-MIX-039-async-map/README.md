# TS-MIX-039 — Generate mixed async method names

Implement `AsyncNames` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- Each key gains the `Async` suffix.
- Its value becomes `(...args: never[]) => Promise<…>` around the original property type — a
  method that promises the value and takes no usable argument.

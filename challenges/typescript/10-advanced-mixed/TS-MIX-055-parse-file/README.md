# TS-MIX-055 — Parse mixed file names

Implement `ParseFile` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- A filename is a base, `.`, then the extension.
- The result carries `base` and `extension`; a name without a dot produces `never`.

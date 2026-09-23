# TS-MIX-027 — Classify mixed property values

Implement `PropertyLabels` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

In this order:

- a `string` value is labelled `"string"`;
- a `number` value is labelled `"number"`;
- everything else, `boolean` included, is labelled `"other"`.

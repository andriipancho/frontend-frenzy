# TS-MIX-069 — Label deeply mixed leaves

Implement `DeepMixedLabels` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

In this order:

- a `string` leaf is labelled `"string"`;
- a `number` leaf is labelled `"number"`;
- every other leaf, `boolean` included, is labelled `"other"`.

Objects keep their shape and carry the labels of their own leaves.

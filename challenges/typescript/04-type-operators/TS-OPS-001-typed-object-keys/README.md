# TS-OPS-001 — Preserve object keys

Improve `objectKeys` so its result retains the known keys of the input object instead of widening to `string[]`.

## Constraints

- Keep the runtime behavior based on `Object.keys`.
- Accept records with arbitrary property value types.
- Confine the unavoidable boundary assertion to this adapter.

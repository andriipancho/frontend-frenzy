# TS-CORE-021 — Expose immutable tags

Expose `tags` as a readonly array so consumers can read values but cannot mutate the exported collection.

## Constraints

- Keep the string elements.
- Do not use a tuple; the list may grow in source.
- Prevent consumer mutation through the exported type.

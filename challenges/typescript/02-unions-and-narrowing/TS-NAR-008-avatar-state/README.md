# TS-NAR-008 — Represent a missing avatar

A profile either has an avatar URL or the server reports that it has none. The
absence is always sent as an explicit empty value, never as a missing field.

## Constraints

- Keep the exported names.
- Do not use `any` or assertions.
- Accept `string` and `null`; `undefined` is not an accepted value.

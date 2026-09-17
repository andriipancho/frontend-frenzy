# TS-NAR-006 — Accept one or many selections

A picker reports a single selected item as a plain string and a multi-selection
as an array of strings. `Selection` must describe both without forcing the
single case into an array.

## Constraints

- Keep the exported names.
- Do not use `any` or assertions.
- Accept `string` and `string[]`, and nothing else.

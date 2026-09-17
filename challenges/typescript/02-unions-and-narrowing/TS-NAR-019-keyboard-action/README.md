# TS-NAR-019 — Constrain keyboard actions

The component handles four navigation commands: `"next"`, `"previous"`,
`"select"`, and `"dismiss"`. Restrict `KeyboardAction` to them.

## Constraints

- Keep the exported names.
- Do not use `any` or assertions.
- Accept only those four commands, exactly as written.

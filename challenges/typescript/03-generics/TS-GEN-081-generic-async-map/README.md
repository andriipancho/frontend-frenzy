# TS-GEN-081 — Map an async generic value

Infer an asynchronous transform's input and resolved output types.

## Constraints

- Preserve the input type in the callback.
- Infer the Promise payload from the callback.
- Do not return Promise<unknown>.

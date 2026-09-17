# TS-NAR-014 — Add runtime state to configuration

`ActiveConfig` is the immutable `Config` loaded at startup together with the
`RuntimeState` the process keeps updating while it runs.

## Constraints

- Keep the exported names.
- Do not use `any` or assertions.
- Build the result from both contracts and keep `endpoint` readonly.

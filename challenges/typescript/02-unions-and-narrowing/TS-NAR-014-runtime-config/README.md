# TS-NAR-014 — Add runtime state to configuration

`ActiveConfig` is the immutable `Config` loaded at startup together with the
`RuntimeState` the process keeps updating while it runs.

## Constraints

- Keep the exported names.
- Do not use `any` or assertions.
- Build `ActiveConfig` as an intersection type of `Config` and `RuntimeState`.
  One merged object type restating their properties is a different type here and
  is rejected, even though it accepts the same values.
- Keep `endpoint` readonly.

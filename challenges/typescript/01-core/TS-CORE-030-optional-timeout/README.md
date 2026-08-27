# TS-CORE-030 — Distinguish optional from undefined

Change `RequestConfig` so `timeoutMs` may be omitted, but an explicitly present value must be a number.

## Constraints

- Allow an empty configuration object.
- Reject explicit `undefined` under exact optional property types.
- Keep numeric timeout values valid.

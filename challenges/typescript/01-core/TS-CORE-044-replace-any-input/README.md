# TS-CORE-044 — Replace an unsafe any input

Change `decode` to accept an untrusted value without allowing unchecked operations to leak into its implementation.

## Constraints

- Return `unknown`.
- Accept values of every type.
- Do not use `any`.

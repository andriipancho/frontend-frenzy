# TS-OPS-044 — Validate endpoint tuples

Validate an endpoint list while preserving each method and path tuple exactly.

## Constraints

- Allow only supported HTTP methods.
- Require every path to start with `/`.
- Keep the outer list and inner tuples readonly.

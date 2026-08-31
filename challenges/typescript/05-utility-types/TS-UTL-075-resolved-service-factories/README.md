# TS-UTL-075 — Resolve a service factory registry

Derive a service-instance registry from synchronous and asynchronous factory functions.

## Constraints

- Keep factory keys as service keys.
- Resolve Promise-returning factories.
- Preserve each distinct service contract.

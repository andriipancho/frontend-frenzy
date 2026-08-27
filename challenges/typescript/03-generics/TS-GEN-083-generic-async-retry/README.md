# TS-GEN-083 — Preserve retry result types

Keep an asynchronous operation's resolved type through a retry wrapper.

## Constraints

- The operation must return Promise<T>.
- The wrapper must return the same Promise<T>.
- A minimal single-attempt implementation is sufficient.

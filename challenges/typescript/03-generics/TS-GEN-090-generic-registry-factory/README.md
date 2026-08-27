# TS-GEN-090 — Create a generic registry

Create a keyed registry whose stored value type is chosen by the caller.

## Constraints

- Support typed get and set methods.
- Missing keys must return undefined.
- Reject values outside the selected type.

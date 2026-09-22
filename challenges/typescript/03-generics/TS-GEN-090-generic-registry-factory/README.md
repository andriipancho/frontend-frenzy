# TS-GEN-090 — Create a generic registry

Create a keyed registry whose stored value type is chosen by the caller. The
factory takes no arguments, so there is nothing to infer from: the choice
arrives only as an explicit type argument that one type parameter carries —
`createRegistry<{ id: string }>()`.

## Constraints

- Support typed get and set methods.
- Missing keys must return undefined.
- Reject values outside the selected type.

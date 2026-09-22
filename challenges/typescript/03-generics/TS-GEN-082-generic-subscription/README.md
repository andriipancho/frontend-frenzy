# TS-GEN-082 — Create a generic subscription

Let callers select the value type delivered to a subscription listener. One type
parameter carries that choice, so a caller can also name it explicitly —
`subscribe<{ id: string }>(listener)`.

## Constraints

- The listener argument must use the generic value type.
- Return an unsubscribe function.
- Do not invoke the listener during setup.

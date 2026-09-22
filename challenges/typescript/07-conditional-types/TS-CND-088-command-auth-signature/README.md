# TS-CND-088 — Design authenticated command signatures

Implement `CommandHandler` to design authenticated command signatures, while preserving the generic relationships in the contract.

## Constraints

- Model the command authentication requirement with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.

## Contract

- An authenticated command takes the token first and then the payload:
  `(token: string, payload: <the payload>) => Promise<<the result>>`.
- An unauthenticated one takes only the payload.
- Either way the result is delivered through a Promise.

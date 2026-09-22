# TS-CND-100 — Design endpoint client signatures

Implement `EndpointClient` to design endpoint client signatures, while preserving the generic relationships in the contract.

## Constraints

- Model each endpoint's authentication flag with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.

## Contract

- An authenticated endpoint takes the token first and then the request:
  `(token: string, request: <the request>) => Promise<<the response>>`.
- An unauthenticated one takes only the request.
- Either way the response is delivered through a Promise.

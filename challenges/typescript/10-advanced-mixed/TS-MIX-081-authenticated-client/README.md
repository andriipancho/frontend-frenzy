# TS-MIX-081 — Design mixed authenticated clients

Implement `AuthenticatedClient` by combining the type relationships demonstrated by the contract.

## Constraints

- Preserve every relationship covered by the supplied contract.
- Compose the relevant TypeScript mechanisms without weakening the public type.
- Do not use any.

## Contract

- The result is a function returning a promise of the contract's `response`.
- When `auth` is `true` the token comes first: `(token: string, request) => Promise<response>`.
- When `auth` is `false` there is no token and only the request is taken.

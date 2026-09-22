# TS-CND-093 — Derive route guard requirements

Implement `RouteGuard` to derive route guard requirements, while preserving the generic relationships in the contract.

## Constraints

- Model public access before role-restricted and general authentication with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.

## Contract

In this order:

- a route that needs no authentication produces `{ kind: "public" }`;
- one that lists `roles` produces `{ kind: "roles"; allowed: <the role element union> }`;
- any other authenticated route produces `{ kind: "authenticated" }`.

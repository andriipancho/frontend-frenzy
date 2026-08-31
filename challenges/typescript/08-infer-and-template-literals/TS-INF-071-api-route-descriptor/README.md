# TS-INF-071 — Parse versioned API routes

Implement `ApiRoute` to parse versioned API routes, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from numeric version and resource positions in a route.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.

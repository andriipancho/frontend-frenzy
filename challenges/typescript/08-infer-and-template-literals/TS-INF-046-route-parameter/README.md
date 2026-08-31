# TS-INF-046 — Infer route parameter names

Implement `RouteParameter` to infer route parameter names, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the route segment following a colon marker.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.

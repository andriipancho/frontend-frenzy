# TS-INF-060 — Build resource route paths

Implement `ResourceRoute` to build resource route paths, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from resource and identifier route segments.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.

## Contract

- The result joins the two segments as `/<resource>/<identifier>`, leading slash included.
- A numeric identifier appears in the literal as its digits.

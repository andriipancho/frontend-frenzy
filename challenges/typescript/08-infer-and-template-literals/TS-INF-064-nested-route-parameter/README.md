# TS-INF-064 — Extract nested route parameters

Implement `NestedRouteParameter` to extract nested route parameters, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from a parameter segment bounded by route separators.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.

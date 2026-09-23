# TS-INF-064 — Extract nested route parameters

Implement `NestedRouteParameter` to extract nested route parameters, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from a parameter segment bounded by route separators.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.

## Contract

- A parameter segment starts with `:` and ends at the next `/` or at the end of the path; the
  result is the name between those markers.
- A path with no parameter segment produces `never`.

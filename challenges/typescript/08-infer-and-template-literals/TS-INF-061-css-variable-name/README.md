# TS-INF-061 — Generate CSS variable names

Implement `CssVariable` to generate CSS variable names, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from the custom-property prefix and supplied name.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.

# TS-INF-062 — Generate environment variable names

Implement `EnvironmentName` to generate environment variable names, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from two uppercased segments around an underscore.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.

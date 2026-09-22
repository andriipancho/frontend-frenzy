# TS-OPS-072 — Access feature configuration

Return the exact configuration associated with a concrete feature name.

## Constraints

- Derive feature names from the runtime registry.
- Reject unknown features.
- Make the registry deeply readonly, so the returned configuration preserves each
  exact literal value together with its readonly modifier.

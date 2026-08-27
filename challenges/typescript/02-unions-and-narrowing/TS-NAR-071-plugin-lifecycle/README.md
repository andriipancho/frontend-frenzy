# TS-NAR-071 — Model a plugin lifecycle

Combine shared plugin identity with enabled and disabled lifecycle variants.

## Constraints

- Keep shared identity in `PluginBase`.
- Use an intersection with a discriminated union.
- Require config or reason only in its matching state.

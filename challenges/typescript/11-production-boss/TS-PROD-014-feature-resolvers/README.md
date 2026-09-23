# TS-PROD-014 — Model context-aware feature resolvers

Create a maintainable registry type derived from the supplied source model, without repeating its keys or value types.

## Constraints

- Keep the supplied domain declarations and exported type name.
- Derive all registry members from the source type.
- Do not use any or copy the expected registry by hand.

## Contract

- Each feature key keeps its name.
- Its value becomes either the feature's own type, already resolved, or a function taking the
  request context and returning that same type.

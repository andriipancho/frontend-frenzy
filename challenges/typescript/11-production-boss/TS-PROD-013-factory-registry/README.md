# TS-PROD-013 — Build a constructor factory registry

Create a maintainable registry type derived from the supplied source model, without repeating its keys or value types.

## Constraints

- Keep the supplied domain declarations and exported type name.
- Derive all registry members from the source type.
- Do not use any or copy the expected registry by hand.

## Contract

- Each key keeps its name.
- Its value becomes a function taking no arguments and returning that service.

# TS-PROD-009 — Derive action creators from a union

Create a maintainable registry type derived from the supplied source model, without repeating its keys or value types.

## Constraints

- Keep the supplied domain declarations and exported type name.
- Derive all registry members from the source type.
- Do not use any or copy the expected registry by hand.

## Contract

- Each member's `type` becomes a key of the registry, and every creator returns the whole
  action, discriminant included.
- A member carrying fields beyond `type` takes them as one `payload` argument.
- A member that is only a `type` takes no argument at all.

# TS-MAP-011 — Map property state tuples

Represent each property as a readonly tuple of its value and a dirty flag.

## Constraints

- Preserve source keys.
- Use the related value in tuple position zero.
- Keep each tuple readonly.

# TS-NAR-067 — Model interactive component props

Model a component that behaves as either a link or a button without allowing mixed props.

## Constraints

- Use `as` as the discriminant.
- Require href only for links.
- Require onClick only for buttons.

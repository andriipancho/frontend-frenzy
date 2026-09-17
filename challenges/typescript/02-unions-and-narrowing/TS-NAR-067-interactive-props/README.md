# TS-NAR-067 — Model interactive component props

The component renders as a link or as a button, and both forms keep the required
`label: string`. A link requires `href: string`; a button requires
`onClick: () => void`.

## Constraints

- Use `as` as the discriminant.
- Require href only for links and onClick only for buttons.
- Rule the foreign prop out with `?: never` in each member, so the two modes
  cannot be mixed.

# TS-NAR-059 — Model form field variants

Represent the three field kinds with the properties valid for each: `text` has a
string `value`, `checkbox` has a boolean `value`, and `select` has a string
`value` plus required `options: string[]`.

## Constraints

- Use `type` as the discriminant.
- Require options only for selects.
- Rule `options` out with `?: never` on the kinds that have none.

# TS-NAR-063 — Model cache lookup results

Represent the three lookup outcomes: `hit` carries `value: string`, `miss`
carries nothing, and `stale` carries `value: string` together with
`ageSeconds: number`.

## Constraints

- Use `state` as the discriminant.
- Give each member only the fields listed for it; no `?: never` placeholders.
- Require stale age only for stale entries.

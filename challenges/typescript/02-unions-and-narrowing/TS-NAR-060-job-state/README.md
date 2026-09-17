# TS-NAR-060 — Model background job states

Encode the four job states with the data each one actually has: `queued` has
none, `running` has `startedAt: Date`, `completed` has `result: string` and
`finishedAt: Date`, and `failed` has `error: string` and `finishedAt: Date`.

## Constraints

- Use `status` as the discriminant.
- Give each member only the fields listed for it; no `?: never` placeholders.
- Make invalid combinations unrepresentable.

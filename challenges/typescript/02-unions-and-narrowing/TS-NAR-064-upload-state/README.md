# TS-NAR-064 — Model upload progress states

Encode the four upload states without contradictory optional data: `idle` has
none, `uploading` has `progress: number`, `completed` has `url: string`, and
`failed` has `error: string`.

## Constraints

- Use `status` as the discriminant.
- Give each member only the fields listed for it; no `?: never` placeholders.
- Require progress only while uploading, and URL or error only in a terminal state.

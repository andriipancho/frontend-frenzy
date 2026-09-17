# TS-NAR-058 — Model notification channels

Model the three channels so each requires only its own destination: `email`
needs `address: string`, `sms` needs `phone: string`, and `push` needs
`deviceToken: string`.

## Constraints

- Use `channel` as the discriminant.
- Require the matching destination.
- Rule out the other two destinations with `?: never` in every member, so
  channel fields cannot be mixed.

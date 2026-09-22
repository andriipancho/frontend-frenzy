# TS-NAR-016 — Combine payload and version metadata

Every payload carries its body plus version metadata: a readonly `version` that
is always the exact value `1`. `VersionedPayload` must require the existing
`Payload` contract together with that metadata.

## Constraints

- Keep the exported names.
- Do not use `any` or assertions.
- Build `VersionedPayload` as an intersection type of `Payload` and the version
  metadata. One merged object type restating `data` alongside `version` is a
  different type here and is rejected, even though it accepts the same values.
- Type `version` as the literal `1` rather than `number`, and keep it readonly.

# TS-CORE-041 — Require an enabled feature

Model `EnabledFeature` so its flag proves the feature is enabled rather than merely boolean.

## Constraints

- Keep the `name` field textual.
- Require the enabled property to be true.
- Reject disabled feature objects.

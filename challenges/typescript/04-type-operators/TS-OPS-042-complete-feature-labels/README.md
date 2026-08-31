# TS-OPS-042 — Validate complete feature labels

Check a label lookup against every feature while retaining its exact declared keys.

## Constraints

- Provide one label for every feature.
- Reject extra or missing feature keys.
- Do not widen the lookup to arbitrary strings.

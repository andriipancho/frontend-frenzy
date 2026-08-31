# TS-UTL-040 — Normalize a present label

Require `normalizeLabel` callers to provide a non-nullish label.

## Constraints

- Keep the broader reusable `Label` alias.
- Reject null and undefined at this boundary.
- Return a string.

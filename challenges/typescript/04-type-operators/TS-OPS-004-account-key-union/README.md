# TS-OPS-004 — Derive account keys

Replace the broad account key alias with the exact keys declared by `Account`.

## Constraints

- Keep `Account` as the source of truth.
- Do not repeat property names in a separate union.
- Reject keys that are not present on `Account`.

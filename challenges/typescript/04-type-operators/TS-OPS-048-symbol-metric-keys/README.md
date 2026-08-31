# TS-OPS-048 — Preserve symbol metric keys

Validate a numeric metric lookup while retaining its concrete string and unique-symbol keys.

## Constraints

- Support all property-key kinds in the contract.
- Keep the unique symbol identity.
- Do not widen keys to `PropertyKey`.

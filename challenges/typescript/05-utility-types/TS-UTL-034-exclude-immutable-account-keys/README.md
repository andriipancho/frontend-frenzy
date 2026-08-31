# TS-UTL-034 — Exclude immutable account keys

Derive the property-name union allowed in account updates.

## Constraints

- Remove id and createdAt.
- Keep every other account key.
- Derive keys from the account model.

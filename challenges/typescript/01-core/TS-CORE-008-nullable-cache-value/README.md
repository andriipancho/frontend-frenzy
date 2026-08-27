# TS-CORE-008 — Represent a cache miss

Update `CachedName` so a cache lookup can explicitly represent either a stored name or a cache miss.

## Constraints

- Use `null` for the missing state.
- Do not make the value optional.
- Preserve string values.

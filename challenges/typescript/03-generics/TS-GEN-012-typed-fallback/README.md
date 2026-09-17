# TS-GEN-012 — Preserve a fallback type

Make `withFallback` return the shared type represented by its value and
fallback. One type parameter covers all three positions, so a caller can also
name it explicitly — `withFallback<string>(undefined, "ready")`.

## Constraints

- Keep undefined as the missing marker.
- Relate the fallback to the value type.
- Return a precise type.

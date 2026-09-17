# TS-GEN-013 — Preserve first-or-fallback elements

Relate a readonly array's element type to the fallback and result of `firstOr`.
One type parameter covers all three, so a caller can also name it explicitly —
`firstOr<string>([], "missing")`.

## Constraints

- Accept readonly arrays.
- Require a compatible fallback.
- Return the element type.

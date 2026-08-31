# TS-MAP-056 — Index a union by kind

Turn a discriminated union into an object keyed by each member's kind.

## Constraints

- Require a PropertyKey kind.
- Preserve each complete union member.
- Create one property per discriminant.

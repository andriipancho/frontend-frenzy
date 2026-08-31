# TS-UTL-010 — Model a readonly feature patch

Allow an incomplete feature configuration while preventing mutation of the patch object.

## Constraints

- Every feature field may be omitted.
- Any supplied field keeps its original type.
- All exposed patch properties are readonly.

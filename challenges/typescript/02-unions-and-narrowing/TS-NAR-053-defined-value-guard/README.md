# TS-NAR-053 — Filter defined values

Make `isDefined` preserve a generic value type while filtering out null and undefined.

## Constraints

- Keep the generic relationship.
- Reject both nullish values.
- Expose the narrowed type to array filtering.

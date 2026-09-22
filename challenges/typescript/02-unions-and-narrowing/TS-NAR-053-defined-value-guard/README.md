# TS-NAR-053 — Filter defined values

Make `isDefined` preserve a generic value type while filtering out null and undefined.

## Constraints

- Keep the generic relationship: one type parameter, and a parameter that
  accepts that type together with `null` and `undefined`.
- Reject both nullish values.
- Expose the result as a generic type predicate for the non-nullish case, so
  `Array.prototype.filter` produces an array of the element type without `null`
  or `undefined`; a plain `boolean` return is rejected.

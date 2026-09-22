# TS-NAR-050 — Guard a non-empty string

Make `isNonEmptyString` communicate its validated string type to callers.

## Constraints

- Keep the input unknown.
- Reject empty strings at runtime.
- Expose the result as a type predicate that narrows the argument to `string`;
  a plain `boolean` return is rejected.
- The non-empty rule stays a runtime check only. Do not introduce a branded or
  otherwise narrower string type for it — the narrowed type must be exactly
  `string`.

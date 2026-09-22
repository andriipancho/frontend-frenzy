# TS-NAR-051 — Guard an identified value

Expose a guard for unknown values containing a string `id` property.

## Constraints

- Keep the input unknown.
- Validate object presence, key presence, and property type.
- Expose the result as a type predicate that narrows the argument to the
  exported `Identified` type; a plain `boolean` return is rejected.
- Do not use assertions or `any`.

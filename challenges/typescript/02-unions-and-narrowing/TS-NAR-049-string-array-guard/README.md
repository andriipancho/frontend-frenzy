# TS-NAR-049 — Guard a string array

Turn `isStringArray` into a reusable guard that proves every unknown array element is a string.

## Constraints

- Keep the input unknown.
- Validate the container and every element.
- Expose the result as a type predicate that narrows the argument to `string[]`;
  a plain `boolean` return is rejected.

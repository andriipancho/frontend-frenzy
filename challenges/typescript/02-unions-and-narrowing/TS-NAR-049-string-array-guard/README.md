# TS-NAR-049 — Guard a string array

Turn `isStringArray` into a reusable guard that proves every unknown array element is a string.

## Constraints

- Keep the input unknown.
- Validate the container and every element.
- Expose the narrowed type to callers.

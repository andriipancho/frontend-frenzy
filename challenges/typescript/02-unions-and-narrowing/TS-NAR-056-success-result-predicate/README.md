# TS-NAR-056 — Guard a successful result

Make `isSuccess` narrow a result union to its successful member.

## Constraints

- Keep the discriminated result union.
- Use the existing boolean discriminant.
- Expose the result as a type predicate that narrows the argument to the
  exported `Success` member; a plain `boolean` return is rejected.
- Keep the parameter typed as `Result`.

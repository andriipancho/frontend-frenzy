# TS-NAR-055 — Guard a promise-like value

Identify unknown objects that expose a callable `then` member.

## Constraints

- Keep the check structural.
- Verify that `then` is callable.
- Expose the result as a type predicate that narrows the argument to the
  exported `PromiseLikeValue` type; a plain `boolean` return is rejected.
- Do not use `any` or assertions.

# TS-NAR-054 — Narrow a filtered number list

Turn `isNumber` into a predicate so array filtering produces `number[]`.

## Constraints

- Keep the input unknown.
- Use a runtime primitive check.
- Expose the result as a type predicate that narrows the argument to `number`;
  a plain `boolean` return is rejected.

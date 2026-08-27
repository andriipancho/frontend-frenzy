# TS-CORE-049 — Model a void event listener

Correct `Listener` so callbacks may perform side effects without being required to return `undefined` explicitly.

## Constraints

- Keep the event parameter as a string.
- Do not require a return statement.
- Ignore any returned callback value.

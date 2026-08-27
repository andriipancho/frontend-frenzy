# TS-NAR-055 — Guard a promise-like value

Identify unknown objects that expose a callable `then` member.

## Constraints

- Keep the check structural.
- Verify that `then` is callable.
- Do not use `any` or assertions.

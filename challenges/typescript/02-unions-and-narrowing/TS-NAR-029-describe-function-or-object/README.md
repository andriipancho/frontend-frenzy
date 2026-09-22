# TS-NAR-029 — Describe function or object

`describeCallable` describes its input: a function is reported as callable, a
record contributes its `kind`. Complete it by narrowing the union before reading
the property.

## Constraints

- Handle every union member.
- Use runtime checks that TypeScript understands.
- Do not use `any` or assertions.
- Keep the declared signature: neither the parameter types nor the return
  type may change.

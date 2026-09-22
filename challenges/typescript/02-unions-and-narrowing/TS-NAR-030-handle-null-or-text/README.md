# TS-NAR-030 — Handle null or text

`cleanText` always returns a string: the trimmed text when one was supplied, and
empty text for `null`. Complete it by narrowing the union before trimming.

## Constraints

- Handle every union member.
- Use runtime checks that TypeScript understands.
- Do not use `any` or assertions.
- Keep the declared signature: neither the parameter types nor the return
  type may change.

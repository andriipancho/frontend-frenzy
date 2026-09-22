# TS-NAR-024 — Measure text or list

`measure` reports a length: for text, the character count after trimming; for a
list, the number of items. Complete it by narrowing the union before applying
the member-specific call.

## Constraints

- Handle every union member.
- Use runtime checks that TypeScript understands.
- Do not use `any` or assertions.
- Keep the declared signature: neither the parameter types nor the return
  type may change.

# TS-NAR-027 — Label symbol or text

`labelValue` returns a label for either input: text is uppercased, a symbol
contributes its description, or empty text when it has none. Complete it by
narrowing the union before applying the member-specific call.

## Constraints

- Handle every union member.
- Use runtime checks that TypeScript understands.
- Do not use `any` or assertions.
- Keep the declared signature: neither the parameter types nor the return
  type may change.

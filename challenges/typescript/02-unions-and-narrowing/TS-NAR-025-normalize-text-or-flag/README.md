# TS-NAR-025 — Normalize text or flag

`normalizeValue` always returns text: a string is trimmed, a boolean becomes its
textual form. Complete it by narrowing the union before applying the
member-specific call.

## Constraints

- Handle every union member.
- Use runtime checks that TypeScript understands.
- Do not use `any` or assertions.

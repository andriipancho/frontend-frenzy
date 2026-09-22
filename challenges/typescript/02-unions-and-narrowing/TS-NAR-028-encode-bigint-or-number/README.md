# TS-NAR-028 — Encode bigint or number

`encodeInteger` renders either integer form as digits without a fractional part.
Complete it by narrowing the union before applying the member-specific call —
the two members do not share a formatting method.

## Constraints

- Handle every union member.
- Use runtime checks that TypeScript understands.
- Do not use `any` or assertions.
- Keep the declared signature: neither the parameter types nor the return
  type may change.

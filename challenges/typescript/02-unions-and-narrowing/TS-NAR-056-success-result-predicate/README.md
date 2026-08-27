# TS-NAR-056 — Guard a successful result

Make `isSuccess` narrow a result union to its successful member.

## Constraints

- Keep the discriminated result union.
- Use the existing boolean discriminant.
- Expose the precise successful shape.

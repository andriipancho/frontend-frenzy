# TS-NAR-072 — Normalize an unknown failure boundary

Return a useful message from unknown failures represented as Error, string, or structural message objects.

## Constraints

- Keep the input unknown.
- Handle Error, string, and error-like objects.
- Return a fallback for every other value without assertions.

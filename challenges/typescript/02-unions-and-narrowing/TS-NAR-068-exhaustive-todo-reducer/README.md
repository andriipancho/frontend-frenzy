# TS-NAR-068 — Make a todo reducer exhaustive

Handle every todo action while preserving a never-based exhaustive fallback.

## Constraints

- Keep `assertNever`.
- Handle add, toggle, and clear.
- Do not replace the fallback with a broad return.

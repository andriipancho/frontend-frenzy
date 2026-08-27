# TS-NAR-075 — Make async state rendering exhaustive

Render every async lifecycle state, including cancellation, with a never-based exhaustive fallback.

## Constraints

- Keep all five state variants.
- Keep the never fallback.
- Read payloads only in their matching branches.

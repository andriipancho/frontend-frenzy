# TS-UTL-060 — Resolve an async result union

Resolve promise members in a union while preserving its synchronous null state.

## Constraints

- Unwrap both promise members.
- Keep null unchanged.
- Do not rebuild the resulting union manually.

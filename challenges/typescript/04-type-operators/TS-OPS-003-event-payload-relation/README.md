# TS-OPS-003 — Relate events to payloads

Change `emit` so each event name accepts only the payload declared for that specific event.

## Constraints

- Keep one function implementation.
- Preserve inference at call sites.
- Do not use overloads or assertions.

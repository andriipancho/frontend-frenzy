# TS-CORE-043 — Constrain event severity

Correct `Event` so severity is limited to the levels handled by the logging pipeline.

## Constraints

- Allow info, warning, and error.
- Keep message as a string.
- Reject arbitrary severity text.

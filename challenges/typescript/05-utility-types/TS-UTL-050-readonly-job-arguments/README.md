# TS-UTL-050 — Protect job constructor arguments

Expose job constructor arguments as a readonly tuple for queued work.

## Constraints

- Preserve tuple positions and labels.
- Keep the optional priority argument.
- Prevent mutation of the argument tuple.

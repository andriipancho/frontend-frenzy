# TS-NAR-066 — Narrow socket messages

Handle text, presence, and error socket messages using their discriminant.

## Constraints

- Keep all message variants.
- Read only fields available in the narrowed branch.
- Return a string for every message.

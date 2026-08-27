# TS-CORE-026 — Accept a readonly tuple

Allow `formatEntry` to consume readonly key/value tuples without requiring mutation rights.

## Constraints

- Keep the tuple positions fixed.
- Accept mutable and readonly tuples.
- Do not copy or assert the input.

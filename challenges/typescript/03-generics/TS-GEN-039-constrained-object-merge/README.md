# TS-GEN-039 — Merge constrained objects

Merge two objects while preserving all fields from both inputs.

## Constraints

- Reject primitive inputs.
- Preserve both object types. The result is an intersection type of the two
  input types; one object type restating their fields is a different type here
  and is rejected, even though it accepts the same values.
- Keep the spread implementation assertion-free.

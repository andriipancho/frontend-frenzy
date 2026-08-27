# TS-GEN-098 — Preserve mutation input and output

Model a mutation client whose operation name determines both its input and asynchronous output.

## Constraints

- Each mutation entry has input and output members.
- Reject inputs from other mutations.
- Return the matching output in a Promise.

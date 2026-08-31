# TS-UTL-073 — Derive a project update input

Create a production update type that excludes immutable fields and allows sparse edits.

## Constraints

- Exclude id, ownerId, and timestamps.
- Make every editable field optional.
- Preserve exact project field types.

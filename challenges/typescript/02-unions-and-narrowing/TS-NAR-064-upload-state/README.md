# TS-NAR-064 — Model upload progress states

Encode idle, uploading, completed, and failed upload states without contradictory optional data.

## Constraints

- Use `status` as the discriminant.
- Require progress only while uploading.
- Require URL or error only in terminal states.

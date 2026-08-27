# TS-NAR-060 — Model background job states

Encode queued, running, completed, and failed jobs with their required timestamps and payloads.

## Constraints

- Use `status` as the discriminant.
- Require only data meaningful to each state.
- Make invalid transitions unrepresentable.

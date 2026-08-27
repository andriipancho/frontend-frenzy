# TS-GEN-095 — Preserve event emitter payloads

Model an event emitter that preserves the payload contract for both emission and subscription.

## Constraints

- Only known event names are valid.
- Emit and listener payloads must match the chosen event.
- Keep both methods generic over one event key per call.

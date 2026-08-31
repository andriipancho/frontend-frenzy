# TS-MAP-057 — Index payloads by event type

Create an event payload map from a discriminated event union.

## Constraints

- Use event type as the key.
- Store only each payload as the value.
- Preserve event-to-payload relationships.

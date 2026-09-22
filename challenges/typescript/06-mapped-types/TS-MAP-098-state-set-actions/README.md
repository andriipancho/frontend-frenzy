# TS-MAP-098 — Generate state set actions

Generate set-prefixed action creators for every state property.

## Constraints

- Prefix and capitalize property keys.
- Accept related payload values.
- Return an action object carrying `type` and `payload`, where `type` is the
  exact generated creator name rather than the original property key.

# TS-CORE-029 — Make a display name optional

Model `displayName` as an optional profile property while keeping the account ID required.

## Constraints

- Keep both property names.
- Allow the property to be absent.
- When present, the display name must be a string.

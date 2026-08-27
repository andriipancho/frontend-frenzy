# TS-CORE-011 — Annotate an event payload

Annotate the handler boundary so `recordEvent` accepts the defined payload shape under strict TypeScript.

## Constraints

- Use the existing `EventPayload` type.
- Keep the runtime body unchanged.
- Reject payloads missing required fields.

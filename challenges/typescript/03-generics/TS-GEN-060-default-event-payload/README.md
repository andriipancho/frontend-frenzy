# TS-GEN-060 — Default event payload

Define a domain event whose payload defaults to `void` and remains configurable.

## Constraints

- Omitted payloads must use void.
- Explicit payloads must be preserved.
- Keep the event name independent from the payload.

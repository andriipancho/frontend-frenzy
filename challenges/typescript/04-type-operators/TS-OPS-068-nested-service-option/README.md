# TS-OPS-068 — Read a nested service option

Preserve both service and option selections when reading nested configuration.

## Constraints

- Reject unknown services.
- Restrict options to the selected service.
- Return the exact nested option type.

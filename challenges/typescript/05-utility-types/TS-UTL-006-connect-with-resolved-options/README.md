# TS-UTL-006 — Connect with resolved options

Require callers of the low-level connector to provide every connection option.

## Constraints

- Keep the public option model optional for upstream callers.
- Require all fields at this lower-level boundary.
- Do not add a second manual interface.

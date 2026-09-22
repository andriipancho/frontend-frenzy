# TS-MAP-083 — Map property audit entries

Create an audit entry for every property with its typed previous and next values.

## Constraints

- Preserve property keys.
- Name the two related values `previous` and `next`, both typed from the property.
- Require the shared metadata beside them: `actorId` as a string and `at` as a Date.

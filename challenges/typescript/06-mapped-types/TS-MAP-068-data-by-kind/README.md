# TS-MAP-068 — Map payload data by kind

Index union members by kind while removing the discriminant from each stored value.

## Constraints

- Use kind as the key.
- Remove kind from each value.
- Preserve every remaining field.

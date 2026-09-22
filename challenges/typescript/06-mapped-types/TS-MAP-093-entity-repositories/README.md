# TS-MAP-093 — Map entity repositories

Create a typed repository contract for every entity map entry.

## Constraints

- Preserve entity keys.
- Give each entity a `find` and a `save` method, both asynchronous: `find`
  resolves the entity or `null`, and `save` resolves nothing.
- Use string IDs.

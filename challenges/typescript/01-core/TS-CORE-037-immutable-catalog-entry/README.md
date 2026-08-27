# TS-CORE-037 — Model an immutable catalog entry

Strengthen `CatalogEntry` so identity, position, and tags are immutable while the description remains optional.

## Constraints

- Use a readonly two-number tuple for position.
- Use a readonly variable-length string array for tags.
- Keep `description` optional and textual.

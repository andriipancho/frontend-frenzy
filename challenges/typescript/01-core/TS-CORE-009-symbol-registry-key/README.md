# TS-CORE-009 — Use a symbol registry key

Model registry keys as symbols so independently created keys cannot collide by text.

## Constraints

- Keep the `RegistryKey` alias.
- Use the symbol primitive, not an object wrapper.
- Reject string keys.

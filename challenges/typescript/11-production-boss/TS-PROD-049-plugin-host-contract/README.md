# TS-PROD-049 — Derive a plugin host contract

Compose a maintainable application-level contract from the supplied domain specification, preserving every nested relationship.

## Constraints

- Keep all supplied domain declarations and exported API names.
- Derive the public contract from the specification rather than repeating it.
- Do not use any, assertions, broad index signatures, or hard-coded example keys.

## Contract

- The host carries `install`, generic over the plugin names, taking a name and that plugin's
  own `options`, and returning that plugin's `api`.
- It also carries `installed`, holding every plugin's `api` as an optional property, since a
  plugin may not be installed yet.

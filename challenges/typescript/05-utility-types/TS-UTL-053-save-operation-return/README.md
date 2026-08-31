# TS-UTL-053 — Derive an async operation return

Preserve the full promise return type of an asynchronous save function.

## Constraints

- Keep the Promise wrapper.
- Do not duplicate the saved object shape.
- Derive directly from the function.

# TS-PROD-043 — Convert named tuple specs to records

Derive a production contract from function, constructor, or tuple structure while retaining precise inputs and outputs.

## Constraints

- Keep the exported type name and generic constraints.
- Preserve parameter tuples, return values, and readonly structure where applicable.
- Do not use any, erase arguments, or enumerate the supplied example.

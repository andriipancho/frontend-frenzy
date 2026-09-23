# TS-PROD-041 — Promisify a service interface

Derive a production contract from function, constructor, or tuple structure while retaining precise inputs and outputs.

## Constraints

- Keep the exported type name and generic constraints.
- Preserve parameter tuples, return values, and readonly structure where applicable.
- Do not use any, erase arguments, or enumerate the supplied example.

## Contract

- Every method keeps its parameter list, labels included, and returns a promise of its result.
- A method already returning a promise is not wrapped twice.
- Properties that are not functions pass through unchanged.

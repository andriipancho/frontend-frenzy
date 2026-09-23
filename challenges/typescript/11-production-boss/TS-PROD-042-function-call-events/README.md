# TS-PROD-042 — Derive call events from service methods

Derive a production contract from function, constructor, or tuple structure while retaining precise inputs and outputs.

## Constraints

- Keep the exported type name and generic constraints.
- Preserve parameter tuples, return values, and readonly structure where applicable.
- Do not use any, erase arguments, or enumerate the supplied example.

## Contract

- The result is the union of one event per method; properties that are not functions
  contribute nothing.
- Each event carries `method`, the property name; `args`, that method's parameter tuple with
  its labels; and `result`, its return type with any promise resolved.

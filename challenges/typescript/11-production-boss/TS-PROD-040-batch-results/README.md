# TS-PROD-040 — Correlate batch inputs with results

Derive a production contract from function, constructor, or tuple structure while retaining precise inputs and outputs.

## Constraints

- Keep the exported type name and generic constraints.
- Preserve parameter tuples, return values, and readonly structure where applicable.
- Do not use any, erase arguments, or enumerate the supplied example.

## Contract

- The tuple keeps its length, its order and its readonly modifier.
- Each position becomes `{ input; result }`: `input` is the original element, and `result`
  carries `accepted: boolean`.
- When the input carries an `id`, the result repeats that same `id` alongside `accepted`.

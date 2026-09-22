# TS-NAR-015 — Combine identity with behavior

The registry calls a handler with the event name and expects no return value,
and it also reads a `readonly id` of type `string` from that same handler.
`IdentifiedHandler` must describe both capabilities of one value.

## Constraints

- Keep the exported names.
- Do not use `any` or assertions.
- Keep the call signature `(event: string) => void` and require the readonly `id`.
- Combine the two capabilities as an intersection type of a function type and an
  object type. A single callable object type that declares the call signature
  and the property together is a different type here and is rejected, even
  though it accepts the same values.

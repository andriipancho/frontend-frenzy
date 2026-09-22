# TS-NAR-052 — Guard an error-like value

Build a structural guard for unknown values with a string message.

## Constraints

- Do not require an Error instance.
- Validate the message property.
- Expose the result as a type predicate that narrows the argument to the
  exported `ErrorLike` type; a plain `boolean` return is rejected.
- Keep the implementation assertion-free.

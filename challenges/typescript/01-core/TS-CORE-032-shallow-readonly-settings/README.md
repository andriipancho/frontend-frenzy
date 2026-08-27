# TS-CORE-032 — Model shallow readonly settings

Protect the `preferences` reference from replacement while intentionally allowing updates inside the nested object.

## Constraints

- Keep the nested theme mutable.
- Prevent replacing the preferences object.
- Do not use a built-in utility type.

# TS-NAR-017 — Constrain theme names

The application ships three themes: `"light"`, `"dark"`, and `"system"`.
Restrict `ThemeName` so any other name is rejected at compile time.

## Constraints

- Keep the exported names.
- Do not use `any` or assertions.
- Accept only those three values, exactly as written.

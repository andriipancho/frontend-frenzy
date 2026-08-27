# TS-CORE-038 — Define request status literals

Restrict `RequestStatus` to the four states supported by the request lifecycle.

## Constraints

- Allow `idle`, `loading`, `success`, and `error`.
- Reject arbitrary strings.
- Keep a single exported alias.

# TS-CORE-005 — Model a string user ID

Correct `userPath` so its public boundary accepts the string identifiers used by the API.

## Constraints

- Keep the function name and path format.
- Reject numeric identifiers.
- Do not coerce the identifier at the call site.

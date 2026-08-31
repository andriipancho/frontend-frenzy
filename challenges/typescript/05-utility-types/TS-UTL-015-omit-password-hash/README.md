# TS-UTL-015 — Remove a password hash

Derive a safe user object by excluding the stored password hash.

## Constraints

- Preserve every non-secret field.
- Do not enumerate all retained fields.
- Keep the source `UserRecord` unchanged.

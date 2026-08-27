# TS-NAR-074 — Model request body contracts

Model GET, POST, and DELETE requests so method-specific parameters cannot be mixed.

## Constraints

- Use `method` as the discriminant.
- GET has no body, POST requires JSON, DELETE requires an ID.
- Reject invalid method and payload combinations.

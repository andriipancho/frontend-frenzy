# TS-CORE-036 — Make request headers optional

Allow `RequestOptions` to omit headers while validating every provided header value as a string.

## Constraints

- Keep the method required.
- Allow arbitrary header names.
- Reject non-string header values.

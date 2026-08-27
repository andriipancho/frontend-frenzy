# TS-NAR-058 — Model notification channels

Model email, SMS, and push notifications so each channel requires only its own destination.

## Constraints

- Use `channel` as the discriminant.
- Require the matching destination.
- Reject mixed channel fields.

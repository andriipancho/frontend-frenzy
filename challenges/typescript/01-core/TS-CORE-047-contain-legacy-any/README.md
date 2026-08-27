# TS-CORE-047 — Contain a legacy any boundary

Keep the intentional `any` input from a legacy boundary but prevent it from contaminating downstream code.

## Constraints

- Keep the input typed as `any` to represent the legacy source.
- Expose `unknown` to callers.
- Do not inspect or assert the value.

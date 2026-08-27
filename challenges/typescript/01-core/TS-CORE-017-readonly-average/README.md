# TS-CORE-017 — Accept readonly measurements

Update `average` so callers can pass mutable or readonly numeric arrays without allowing the function to mutate them.

## Constraints

- Accept readonly arrays.
- Keep the numeric result.
- Do not copy or assert the input.

# TS-NAR-063 — Model cache lookup results

Represent cache hits, misses, and stale entries with precise payloads.

## Constraints

- Use `state` as the discriminant.
- Require a value for hit and stale states.
- Require stale age only for stale entries.

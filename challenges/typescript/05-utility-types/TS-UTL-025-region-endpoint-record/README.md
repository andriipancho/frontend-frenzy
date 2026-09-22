# TS-UTL-025 — Derive a region endpoint record

Derive valid region keys from a runtime list and require an endpoint for each region.

## Constraints

- Keep the region list as the source of truth.
- Require HTTPS endpoint strings: type the values with a template literal type
  that forces the `https://` prefix. Plain `string` does not satisfy this.
- Cover every derived region.

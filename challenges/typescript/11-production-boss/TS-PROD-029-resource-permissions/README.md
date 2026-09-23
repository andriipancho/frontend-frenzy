# TS-PROD-029 — Parse resource permission strings

Derive a strongly typed production contract from the supplied string convention.

## Constraints

- Keep the exported type name and its generic inputs.
- Return the documented fallback for malformed input.
- Do not use any or hard-code the supplied example literals.

## Contract

- A permission is a resource, `:`, then an action, and the result carries `resource` and
  `action`.
- A union of permissions produces the union of the parsed objects, one per member.

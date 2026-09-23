# TS-REC-040 — Generate leaf-only object paths

Implement `LeafPaths` to generate leaf-only object paths without losing the relationships shown by the contract.

## Constraints

- Recurse through only primitive keys or recursively prefixed child leaf paths.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.

## Contract

- Paths join keys with `.`.
- Only paths that end at a non-object value appear; the paths of the objects along the way
  are left out.

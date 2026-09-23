# TS-REC-038 — Collect every route parameter

Implement `RouteParameters` to collect every route parameter without losing the relationships shown by the contract.

## Constraints

- Recurse through one parameter segment and the recursively remaining route.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.

## Contract

- A parameter segment starts with `:`, and the result is the union of every parameter name in
  the route.
- A route with no parameter produces `never`.

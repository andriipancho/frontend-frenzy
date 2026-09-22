# TS-INF-065 — Generate endpoint method names

Implement `EndpointMethodName` to generate endpoint method names, while preserving the inferred relationships in the contract.

## Constraints

- Derive the output from method and resource portions of an endpoint contract.
- Preserve exact literal, tuple, and generic relationships in the resulting type.
- Do not use any.

## Contract

- A contract is an HTTP method, one space, then a slash-prefixed resource.
- The result is the lowercased method followed by the capitalized resource, so `"GET /users"`
  produces `"getUsers"`.
- Text that is not a method-and-resource contract produces `never`.

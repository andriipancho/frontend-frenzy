# TS-REC-017 — Remove matching tuple members

Implement `RemoveMembers` to remove matching tuple members without losing the relationships shown by the contract.

## Constraints

- Recurse through tuple heads that are either discarded or prepended.
- Define a terminating base case before or alongside the recursive branch.
- Do not use any.

## Contract

- A member is dropped when it is assignable to the search type, so searching for `string`
  removes every string literal member.
- Surviving members keep their order; an empty tuple produces `[]`.

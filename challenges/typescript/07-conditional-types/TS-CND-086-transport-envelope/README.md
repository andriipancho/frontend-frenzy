# TS-CND-086 — Design transport envelopes

Implement `TransportEnvelope` to design transport envelopes, while preserving the generic relationships in the contract.

## Constraints

- Model the online transport mode with conditional branch selection.
- Preserve exact literal, property, and generic relationships in the resulting type.
- Do not use any.

## Contract

- Online produces `{ source: "network"; data: <the payload>; receivedAt: Date }`.
- Offline produces `{ source: "cache"; data: <the payload>; stale: boolean }`.

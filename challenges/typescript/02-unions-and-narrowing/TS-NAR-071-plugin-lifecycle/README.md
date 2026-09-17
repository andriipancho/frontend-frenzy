# TS-NAR-071 — Model a plugin lifecycle

Every plugin carries the shared identity from `PluginBase`. On top of it, an
enabled plugin (`enabled: true`) requires `config: { endpoint: string }`, and a
disabled one (`enabled: false`) requires `reason: string`.

## Constraints

- Keep shared identity in `PluginBase` and intersect it with the lifecycle union.
- Use the boolean `enabled` as the discriminant.
- Rule the foreign field out with `?: never` in each member, so config and reason
  cannot appear together.

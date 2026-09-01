# Challenge authoring

Challenges are immutable learning contracts: after publication, their ID and intended requirement must remain stable. Use `templates/challenge/` as the starting point.

## Folder and ID naming

Place a challenge in `challenges/<domain>/<numbered-topic>/` and name its folder `<ID>-<short-slug>`.

TypeScript topic codes:

| Topic directory | Code |
| --- | --- |
| `01-core` | `CORE` |
| `02-unions-and-narrowing` | `NAR` |
| `03-generics` | `GEN` |
| `04-type-operators` | `OPS` |
| `05-utility-types` | `UTL` |
| `06-mapped-types` | `MAP` |
| `07-conditional-types` | `CND` |
| `08-infer-and-template-literals` | `INF` |
| `09-recursive-types` | `REC` |
| `10-advanced-mixed` | `MIX` |
| `11-production-boss` | `PROD` |

IDs use `DOMAIN-TOPIC-NNN`, such as `TS-GEN-005`. Assign the next unused number within the topic. Never fill a gap by reusing a retired ID.

## Required files

- `README.md`: state the outcome, constraints, and acceptance criteria without naming the entire implementation.
- `task.ts`: starter code and a narrow TODO surface.
- `test.ts`: deterministic type or runtime tests.
- `meta.json`: schema-valid discovery and training data.

Metadata includes a stable ID, title, domain, topic, difficulty, concept tags, estimated time, prerequisites, progressive hints, and validation type. Run `npm run lint` to validate it.

A README constraint is only a promise until something checks it. When the README
forbids syntax, declare it so `frenzy check` enforces it against the solution:

```json
"constraints": { "forbid": ["any", "type-assertion", "non-null-assertion", "ts-ignore"] }
```

The check reads the syntax tree, so the words in comments, strings, and
identifiers are never mistaken for the constructs, and `as const` is allowed. It
runs only after the challenge compiles: a solution that reached a passing
compile by widening to `any` still fails. Omit the block when the challenge is
about the construct itself.

## Tests and validation

Prefer `Expect<Equal<A, B>>` from `internal/validation/type-assertions.ts`. Use `@ts-expect-error` to prove invalid calls remain invalid. TypeScript validation runs the challenge's `test.ts` in isolation under strict settings and `tsc --noEmit`.

Use runtime tests only when behavior—not just assignability—is part of the requirement. Do not make the root build depend on unsolved starter files.

Before publishing, write the reference solution to `reference/<domain>/<ID>.ts`
and run `frenzy verify <ID>`. It proves both halves of a sound challenge: the
reference passes, and the published starter does not. It also checks the
reference against the challenge's own declared constraints, so a reference that
cheats is rejected too.

The reference lives outside the challenge directory on purpose — nothing that
spoils a challenge should sit next to the file you edit while solving it. The
verification runs against a scratch copy, so a challenge's own files are never
written to.

`frenzy verify --all` runs the whole bank and reports how many challenges still
have no reference. CI runs it as a separate job.

## Difficulty and hints

- `easy`: one primary concept with a direct application.
- `medium`: a relationship or two concepts must be recognized.
- `hard`: several concepts interact or edge cases must be modeled.
- `boss`: production trade-offs or an unlabeled combination of mechanisms.

Use up to three hints: conceptual direction, language mechanism, and structural direction. Never paste the final implementation.

## Review checklist

1. Search metadata titles and topic tags for duplicates.
2. Verify the requested difficulty comes from reasoning, not trivia.
3. Confirm the task is solvable from its own README and starter.
4. Confirm positive and negative test cases.
5. Run `npm run check` and a passing local solution.
6. Review generated challenges manually before merging them into the main bank.

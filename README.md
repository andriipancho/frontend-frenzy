# 🔥 Frontend Frenzy

Frontend Frenzy is an ongoing deliberate-practice project for frontend engineering. It uses structured, compiler-verified challenges to stress-test fundamentals, measure retention, and explore production-oriented patterns.

> AI is optional, not the judge.

The initial chapter focuses on TypeScript. The engine and metadata model are domain-neutral so JavaScript, React, browser APIs, testing, performance, debugging, and architecture can be added without replacing the core workflow.

## Principles

- Deterministic local validation over subjective grading
- Small, predefined challenges with stable IDs
- Progressive difficulty based on reasoning, not trivia
- Measurable progress and lightweight spaced repetition
- Production-oriented API and modeling decisions
- Minimal dependencies and no required online services

## Quick start

Requires Node.js 20 or newer.

```bash
npm install
npm run build
npm run frenzy -- start typescript
npm run frenzy -- current
npm run frenzy -- check
```

Use a topic path to focus a session:

```bash
npm run frenzy -- start typescript/generics
```

Run `npm link` once if you prefer the shorter global development command, such as `frenzy next`.

## CLI

| Command | Purpose |
| --- | --- |
| `frenzy start <domain[/topic]>` | Start or resume a focused session |
| `frenzy next` | Select the next predefined unsolved challenge |
| `frenzy current` | Show the active challenge and its path |
| `frenzy check [--details]` | Run deterministic local validation |
| `frenzy hint` | Reveal the next predefined hint |
| `frenzy stats [--export]` | Show progress or export a public-safe snapshot |
| `frenzy topics` | List topic-level progress |
| `frenzy retention` | Select a due retention challenge |
| `frenzy devices` | List the machines that recorded progress |
| `frenzy doctor` | Re-validate every challenge marked completed |

## TypeScript curriculum

The TypeScript curriculum contains 875 deterministic challenges across 11 progressively harder topics.

| # | Topic | Challenges |
| --- | --- | ---: |
| 01 | Core | 50 |
| 02 | Unions & Narrowing | 75 |
| 03 | Generics | 100 |
| 04 | Type Operators | 75 |
| 05 | Utility Types | 75 |
| 06 | Mapped Types | 100 |
| 07 | Conditional Types | 100 |
| 08 | Infer & Template Literals | 75 |
| 09 | Recursive Types | 75 |
| 10 | Advanced Mixed | 100 |
| 11 | Production Boss | 50 |

## Challenge anatomy

Each challenge is self-contained:

```text
TS-GEN-002-property-accessor/
├── README.md   # requirements and constraints
├── task.ts     # editable starter code
├── test.ts     # deterministic compile-time checks
└── meta.json   # ID, difficulty, tags, hints, validation
```

Stable IDs follow `DOMAIN-TOPIC-NNN`, for example `TS-GEN-002`. Published IDs are never renumbered or reused. See [challenge authoring](docs/challenge-authoring.md) and the [challenge template](templates/challenge/) to add to the bank.

## Validation

TypeScript challenges run in an isolated strict compiler invocation with `tsc --noEmit`. Tests use compile-time assertions and `@ts-expect-error`; runtime tests belong only in challenges where runtime behavior matters. The root build excludes editable challenge tasks, while `npm run lint` validates every challenge's metadata, naming, and required files.

The normal pass/fail path does not call an LLM, access a network, or inspect unrelated challenges.

## Progress, retention, and stats

Personal progress is stored in `.frenzy/progress.<device>.json`. It tracks attempts, hints, elapsed time, completion, the active challenge, and retention state.

Each machine writes only its own shard, so shards never conflict, and every read merges them: attempts and time are summed because each shard counts only its own work, the furthest hint reveal wins, and the shard with more reviews holds the current schedule. The active challenge stays local — being midway through one machine's session must not hijack another's.

To practise on more than one machine, commit the shards on the branch that holds your solutions and pull it on the other machine. Progress and solutions have to travel together: a challenge recorded as completed whose solution never arrived would fail its next review and corrupt its schedule. `frenzy doctor` re-runs the validation for everything marked completed and reports exactly that.

Completed challenges enter deterministic review intervals at D+1, D+3, D+7, D+14, and D+30. Failed attempts, hint usage, difficulty, time, and the previous review result influence which due challenge is selected first. The algorithm is intentionally small and documented in [retention](retention/README.md).

`frenzy stats --export` writes an aggregate, public-safe `stats/typescript.json` without personal data or per-attempt history.

## AI philosophy

AI may help explain a failed attempt, compare maintainable designs, review a production challenge, or draft an expansion pack. It is not used to select predefined challenges, reveal hints, calculate progress, schedule retention, or judge deterministic solutions.

The project measures deliberate practice, not AI-assisted answer generation.

## Contributing

Start with [docs/challenge-authoring.md](docs/challenge-authoring.md). Every addition needs a unique stable ID, a self-contained task, deterministic tests where possible, progressive predefined hints, and valid metadata. Generated challenge packs require human review before entering the main bank.

## License

[MIT](LICENSE)

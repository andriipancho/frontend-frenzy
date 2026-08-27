# Project

Frontend Frenzy is a local-first deliberate-practice platform for frontend engineering. The current bank covers TypeScript; infrastructure must remain usable by future domains.

## Core principles

- Prefer deterministic validation over AI judgment.
- Keep challenges reproducible and self-contained; AI is optional.
- Avoid unnecessary dependencies and abstractions.
- Preserve published IDs. Never renumber or reuse them.
- Do not modify completed solutions or local progress unless explicitly requested.
- The challenge engine must remain useful with AI completely disabled.

## Challenge conventions

Each challenge directory contains `README.md`, `task.ts`, `test.ts`, and `meta.json`. Read its README and metadata before editing. Metadata must satisfy `internal/challenge-schema/challenge.schema.json`; IDs use `DOMAIN-TOPIC-NNN` and remain stable after publication.

Tests should use deterministic compiler assertions, `@ts-expect-error`, or runtime checks only when runtime behavior matters. Keep validation infrastructure separate from editable solutions. Never silently weaken tests or change challenge requirements to make a solution pass.

Hints are predefined and progressive: conceptual direction, relevant mechanism, then stronger structural direction. They must not contain a complete implementation.

## Challenge authoring

- Avoid duplicates and match the requested reasoning difficulty.
- Require deterministic tests wherever the problem has an objective result.
- Include predefined hints and expected concept tags.
- Do not reveal the solution in the task description.
- Review generated expansion packs before adding them to the main bank.
- Prefer deeper combinations of concepts over obscure compiler trivia.

Production challenges may admit multiple designs. Test objective invariants separately from design review, and prefer maintainability over maximum type-system cleverness.

## AI usage

Appropriate uses include post-attempt explanation, alternative-solution review, production design review, expansion drafting, and analysis of aggregate weak areas. Do not use AI for ordinary validation, challenge selection, predefined hints, metadata reads, progress calculations, or retention scheduling.

The project measures deliberate practice, not AI-assisted answer generation.

## Code quality

Use strict TypeScript, readable names, and minimal abstractions. Avoid `any` unless the challenge explicitly examines it. Keep formatting consistent and infrastructure independent from challenge solutions.

Agents must:

1. Read the nearest relevant README and `meta.json` before editing.
2. Make the smallest required change.
3. Run the relevant validation.
4. Avoid unrelated rewrites.
5. Never silently modify challenge requirements.
6. Report validation failures clearly.
7. Preserve completed history and statistics.

# Public stats

Run `frenzy stats --export` to create a public-safe aggregate snapshot such as `stats/typescript.json`. Snapshots contain counts and durations only—no personal data, timestamps, file paths, or per-attempt history.

The private source of truth remains `.frenzy/progress.json`, which is ignored by Git.

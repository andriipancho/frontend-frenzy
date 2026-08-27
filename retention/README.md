# Retention model

Completed challenges are scheduled at D+1, D+3, D+7, D+14, and D+30. The progress file stores only the current stage, next due timestamp, review count, and previous result.

When several reviews are due, selection is deterministic. Priority increases with failed attempts, hints used, challenge difficulty, completion beyond the estimated time, and a failed previous review. Ties resolve by due time and stable challenge ID.

A passed review advances one interval. A failed review is retried after one day. This intentionally small model can evolve without changing challenge metadata or introducing a database.

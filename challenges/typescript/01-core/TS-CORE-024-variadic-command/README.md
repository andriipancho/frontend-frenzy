# TS-CORE-024 — Model variadic command arguments

Define `CommandLine` so it requires a command name and then accepts any number of string arguments.

## Constraints

- Require at least one element.
- Keep every argument textual.
- Use one tuple type without fixed argument count.

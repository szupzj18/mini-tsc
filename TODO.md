# mini-tsc TODO

This checklist tracks the remaining core work items. Update it as you land new functionality so contributors know where help is needed.

## Pending features
- **Parser** – Build an AST for `let` declarations, identifiers, and literal expressions; surface syntax errors with helpful locations.
- **Emitter** – Walk the AST and emit JavaScript (start with direct `let` reprints) plus unit tests that snapshot the output.
- **Type checker** – Implement a minimal semantic pass that validates duplicate identifiers and enforces declared literal types.
- **Extended lexer support** – Recognize braces, parentheses, comparison operators, boolean keywords, and template literals.
- **Source maps** – Generate simple source maps tying emitted code back to the original `SyntaxKind` positions.

## Tooling & DX
- Add ESLint/Prettier to keep coding conventions consistent.
- Provide an example CLI (`mini-tsc input.ts`) that runs lex/parse/emit in sequence.
- Expand Jest coverage to include parser error scenarios and emitter golden tests.
- Document contribution workflows (branching, testing matrix) in `CONTRIBUTING.md`.

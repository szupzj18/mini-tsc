# mini-tsc

`mini-tsc` is a deliberately small TypeScript compiler prototype that focuses on explaining the moving pieces of the real TypeScript toolchain. It currently ships with a working lexer and the scaffolding for the rest of the pipeline so that contributors can incrementally grow it into a richer learning resource.

## Why this project exists
- Provide a readable codebase that mirrors the core stages of a compiler without TypeScript's production complexity.
- Serve as a playground for experimenting with lexing/parsing ideas before porting them to larger projects.
- Enable newcomers to learn how testing, build tooling, and automation fit together for a compiler-like package.

## Feature status
| Area | Status | Notes |
| --- | --- | --- |
| Lexer | ✅ Implemented | Understands `let`, identifiers, numeric/string literals, operators `+ - * /`, and delimiters like `;` and `,`. |
| Parser | 🚧 Stubbed | Function signature is present, but it returns `null` and needs an AST builder. |
| AST/Emitter | 🚧 Stubbed | `SyntaxKind` enum and node interfaces exist; `emit` currently returns placeholder text. |
| Type checker | ❌ Not started | No semantic analysis yet. |
| Tooling | ✅ | TypeScript, Jest (via `ts-jest`), and a Gulp pipeline for compiling to `dist/`. |

## Repository layout
- `src/mini-tsc.ts` – token definitions, `SyntaxKind`, the lexer implementation, and placeholders for parsing/emitting.
- `src/mini-tsc.test.ts` – Jest specs that exercise the lexer and keep the parser contract in place.
- `src/core.ts` – Interface sketches for a future runtime controller (currently unused).
- `gulpfile.js` – Build/watch tasks wiring TypeScript compilation through Gulp.
- `tsconfig.json` – Strict compiler settings targeting `es2016` modules emitted to `dist/`.

## Getting started
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Compile TypeScript**
   ```bash
   npm run build          # uses tsc and writes output to dist/
   # or
   npx gulp build         # runs through the gulp-typescript pipeline
   ```
3. **Run tests**
   ```bash
   npm test
   ```
4. **Watch mode (optional)**
   ```bash
   npx gulp watch         # recompiles on every change under src/
   npm run test:watch     # reruns Jest on changed files
   ```

## Architecture snapshot
- **Tokenization** – The lexer walks the raw source, creates `Token` objects with line/column metadata, handles whitespace/newlines, and recognizes keywords such as `let` while falling back to identifiers for other words.
- **AST contracts** – `SyntaxKind`, `Node`, `SourceFile`, and `Statement` outline the shape of the tree so the future parser and emitter can agree on the payload they exchange.
- **Parsing & emitting** – `parse` keeps the API surface ready for the AST builder, and `emit` intentionally returns a string so you can attach any code-generation experiment once the tree exists.

## Suggested next steps
- Flesh out the parser to support variable declarations (`let x = 1;`) and expression statements.
- Extend the lexer with additional punctuation (`{}`, `()`) and literal types (boolean, template strings).
- Add an emitter test that consumes a mocked AST to lock in formatting decisions early.
- Implement a minimal type checker pass that validates identifier re-declarations or ensures literals align with declared annotations.

## Contributing
1. Fork and clone the repo.
2. Create a feature branch (`git checkout -b feature/your-idea`).
3. Keep `npm test` green and document behavior changes in this README.
4. Open a pull request describing the reasoning behind your change and how to exercise it.

This project is intentionally tiny—feel free to simplify, experiment, and iterate quickly ✨.

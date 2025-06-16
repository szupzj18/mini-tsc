enum TokenType {
  LetKeyword, // 'let'
  Identifier, // variable names
  Equals, // '='
  NumberLiteral, // numeric values 123, 3.14, etc.
  StringLiteral, // string values "hello", 'world', etc.

  // Operators
  Plus, // '+'
  Minus, // '-'
  Multiply, // '*'
  Divide, // '/'

  // Delimiters
  Semicolon, // ';'
  Comma, // ','

  // Control
  EOF, // End of File
  Unknown, // Any unrecognized token
}

interface Token {
  type: TokenType;
  text: string;
  line: number;
  column: number;
}

export enum SyntaxKind {
  SourceFile, // Represents the entire source file
  VariableDeclaration, // Represents a variable declaration
  Identifier, // Represents an identifier (variable name)
  NumberLiteral, // Represents a numeric literal
  StringLiteral, // Represents a string literal
  NumberKeywordToken, // Represents the 'number' keyword
  StringKeywordToken, // Represents the 'string' keyword
}

interface Node {
  kind: SyntaxKind;
  pos: number; // Start position in the source code
  end: number; // End position in the source code
}

interface SourceFile extends Node {
  kind: SyntaxKind.SourceFile;
  statements: Statement[]; // Array of statements in the source file
}

interface Statement extends Node {}

// lexer: tokenizes a string of source code
export function lexer(sourceCode: string): Token[] {
  const tokens: Token[] = [];
  let currentLine = 1;
  let currentColumn = 1;
  let currentIndex = 0;
  while (currentIndex < sourceCode.length) {
    const char = sourceCode[currentIndex];

    if (char === "\n") {
      currentLine++;
      currentColumn = 1;
      currentIndex++;
      continue;
    }
    if (/\s/.test(char)) {
      currentIndex++;
      currentColumn++;
      continue; // Skip whitespace
    }
    if (char === ";") {
      tokens.push({
        type: TokenType.Semicolon,
        text: char,
        line: currentLine,
        column: currentColumn,
      });
      currentIndex++;
      currentColumn++;
      continue;
    }

    if (char === "+") {
      tokens.push({
        type: TokenType.Plus,
        text: char,
        line: currentLine,
        column: currentColumn,
      });
      currentIndex++;
      currentColumn++;
      continue;
    }

    // Handle identifiers and keywords
    if (/[a-zA-Z_]/.test(char)) {
      let identifier = char;
      currentIndex++;
      currentColumn++;
      while (
        currentIndex < sourceCode.length &&
        /[a-zA-Z0-9_]/.test(sourceCode[currentIndex])
      ) {
        identifier += sourceCode[currentIndex];
        currentIndex++;
        currentColumn++;
      }
      if (identifier === "let") {
        tokens.push({
          type: TokenType.LetKeyword,
          text: identifier,
          line: currentLine,
          column: currentColumn - identifier.length,
        });
      } else {
        tokens.push({
          type: TokenType.Identifier,
          text: identifier,
          line: currentLine,
          column: currentColumn - identifier.length,
        });
      }
      continue;
    }
  }
  return tokens;
}

export function parse(tokens: Token[]): SourceFile {
  // This function would parse the tokens into an abstract syntax tree (AST).
  return null as any; // Placeholder for the actual AST
}

function emit(asr: SourceFile): string {
  // This function would convert the abstract syntax tree (AST) into a string representation.
  // For simplicity, we will just return a placeholder string.
  return "Emitted code from AST";
}

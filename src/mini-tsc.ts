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

enum SyntaxKind {
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

interface SourceFile extends Node {}

interface Statement extends Node {}

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

import { lexer, parse, SyntaxKind } from "./mini-tsc";

describe("mini-tsc", () => {
  describe("parser tests", () => {
    it("simple test to check if parser is defined", () => {
      const code = "let ;";
      const tokens = lexer(code);
      expect(tokens).toBeDefined();
      const ast = parse(tokens);
      expect(ast).toBeDefined();
    });
  });
});

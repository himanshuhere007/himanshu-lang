function parser(tokens) {
  let i = 0;
  const ast = [];

  while (i < tokens.length) {
    const token = tokens[i];

    if (token.type === "VAR") {
      const name = tokens[i + 1].value;
      const value = tokens[i + 3];
      ast.push({ type: "Variable", name, value });
      i += 4;
    }

    else if (token.type === "PRINT") {
      ast.push({ type: "Print", value: tokens[i + 1] });
      i += 2;
    }

    else {
      i++;
    }
  }

  return ast;
}

module.exports = parser;

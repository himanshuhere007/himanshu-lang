const KEYWORDS = {
  pakad: "VAR",
  dikha: "PRINT",
  agar: "IF",
  warna: "ELSE",
  jabtak: "WHILE",
  kaam: "FUNCTION",
  bhejo: "RETURN",
  sach: "TRUE",
  jhooth: "FALSE"
};

function lexer(code) {
  const tokens = [];
  const words = code.match(/"[^"]*"|\S+/g) || [];

  for (let word of words) {
    if (KEYWORDS[word]) {
      tokens.push({ type: KEYWORDS[word], value: word });
    } else if (!isNaN(word)) {
      tokens.push({ type: "NUMBER", value: Number(word) });
    } else if (word.startsWith('"')) {
      tokens.push({ type: "STRING", value: word.replace(/"/g, "") });
    } else {
      tokens.push({ type: "IDENTIFIER", value: word });
    }
  }

  return tokens;
}

module.exports = lexer;

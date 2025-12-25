const { error } = require("./errors");

function interpreter(ast) {
  const memory = {};

  for (const node of ast) {
    if (node.type === "Variable") {
      memory[node.name] = node.value.value;
    }

    if (node.type === "Print") {
      if (node.value.type === "IDENTIFIER") {
        if (!(node.value.value in memory)) {
          error(`Variable '${node.value.value}' pehle pakdi nahi gayi`);
        }
        console.log(memory[node.value.value]);
      } else {
        console.log(node.value.value);
      }
    }
  }
}

module.exports = interpreter;

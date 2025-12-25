#!/usr/bin/env node

const fs = require("fs");
const readline = require("readline");
const lexer = require("./src/lexer");
const parser = require("./src/parser");
const interpreter = require("./src/interpreter");
const pkg = require("./package.json");

// -----------------------------
// HELP MESSAGE
// -----------------------------
function showHelp() {
  console.log(`
Himanshu Programming Language

Usage:
  himanshu <demo.hk>        ye ek .hk file ko chalayega
  himanshu repl             Start interactive shell
  himanshu --version        ye language ka version dikhayega
  himanshu madad            ye tmhe saari command dikhayega

Examples:
  himanshu demo.hk
  himanshu repl

Happy Coding
`);
}

// -----------------------------
// VERSION
// -----------------------------
if (process.argv.includes("--version")) {
  console.log(`Himanshu Language v${pkg.version}`);
  process.exit(0);
}

// -----------------------------
// Madad
// -----------------------------
if (process.argv[2] === "madad") {
  showHelp();
  process.exit(0);
}

// -----------------------------
// REPL
// -----------------------------
if (process.argv[2] === "repl") {
  console.log(" Himanshu REPL suru ho gya hai (type 'hatao' to quit)");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "hk> "
  });

  rl.prompt();

  rl.on("line", (line) => {
    if (line.trim() === "hatao") {
      rl.close();
      return;
    }

    try {
      const tokens = lexer(line);
      const ast = parser(tokens);
      interpreter(ast);
    } catch (e) {
      console.error("Galti ho gayi:", e.message);
    }

    rl.prompt();
  });

  rl.on("close", () => {
    console.log("\n REPL band ho gaya");
    process.exit(0);
  });

  return;
}

// -----------------------------
// FILE EXECUTION
// -----------------------------
const file = process.argv[2];

if (!file) {
  showHelp();
  process.exit(0);
}

if (!file.endsWith(".hk")) {
  console.error("Sirf .hk file chalayen");
  process.exit(1);
}

const code = fs.readFileSync(file, "utf8");
const tokens = lexer(code);
const ast = parser(tokens);
interpreter(ast);

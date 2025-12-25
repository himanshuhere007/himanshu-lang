# 🚀 Himanshu Programming Language (`.hk`)

**Himanshu** is a beginner-friendly, Hindi-inspired programming language built using **Node.js**.
It uses simple, readable Hindi keywords to make programming easy and fun.

> Example:

```hk
pakad x = 5
dikha x
```

---

## ✨ Features

- ✅ Custom file extension: **`.hk`**
- ✅ Hindi-style keywords (`pakad`, `agar`, `dikha`, etc.)
- ✅ Node.js-based **Lexer → Parser → Interpreter**
- ✅ Command-line execution (`himanshu index.hk`)
- ✅ Hindi error messages 😄
- ✅ VS Code syntax highlighting support
- ✅ Open-source & beginner friendly

---

## 📦 Installation

### 1️⃣ Prerequisites

- **Node.js v16+**
- **npm**

Check:

```bash
node -v
npm -v
```

---

### 2️⃣ Clone Repository

```bash
git clone https://github.com/<your-username>/himanshu-lang.git
cd himanshu-lang
```

---

### 3️⃣ Install & Link CLI

```bash
npm install
npm link
```

This creates the global command:

```bash
himanshu
```

---

## ▶️ Running a `.hk` Program

Create a file:

```bash
demo.hk
```

```hk
pakad naam = "Himanshu"
dikha naam
```

Run:

```bash
himanshu demo.hk
```

Output:

```txt
Himanshu
```

---

## 🧠 Language Syntax

### 📌 Variables (`pakad`)

```hk
pakad x = 10
pakad naam = "Himanshu"
```

---

### 📌 Print (`dikha`)

```hk
dikha x
dikha "Hello World"
```

---

### 📌 Condition (`agar / warna`)

```hk
pakad age = 20

agar age >= 18 {
    dikha "Eligible"
} warna {
    dikha "Not Eligible"
}
```

---

### 📌 Loop (`jabtak`)

```hk
pakad i = 1

jabtak i <= 5 {
    dikha i
    pakad i = i + 1
}
```

---

### 📌 Function (`kaam / bhejo`)

```hk
kaam jod(a, b) {
    bhejo a + b
}

dikha jod(10, 20)
```

---

## 🧪 Full Demo Program

```hk
pakad naam = "Himanshu"
pakad total = 0

dikha "Namaste!"
dikha naam

pakad i = 1
jabtak i <= 5 {
    pakad total = total + i
    pakad i = i + 1
}

dikha "Total:"
dikha total
```

---

## ❌ Error Handling (Hindi 😄)

```hk
dikha x
```

Output:

```txt
❌ Himanshu Error: Variable 'x' pehle pakdi nahi gayi
```

---

## 🧩 VS Code Extension Installation

### Local Install (Recommended)

1. Open **VS Code**
2. Press `Ctrl + Shift + P`
3. Select **Extensions: Install from Location**
4. Choose folder:

   ```
   vscode-extension
   ```

5. Restart VS Code

✔ `.hk` files will now have syntax highlighting

---

## 🏗 Project Architecture

```
himanshu-lang/
│
├── src/
│   ├── lexer.js
│   ├── parser.js
│   ├── interpreter.js
│   └── errors.js
│
├── cli.js
├── package.json
├── README.md
│
└── vscode-extension/
    ├── package.json
    └── syntaxes/
        └── hk.tmLanguage.json
```

---

## 🛠 How It Works

```
.hk file
   ↓
Lexer        → Tokens
   ↓
Parser       → AST
   ↓
Interpreter  → Output
```

---

## 🧑‍💻 Built With

- **Node.js**
- **JavaScript**
- **VS Code TextMate Grammar**

---

## 🚧 Roadmap

- [ ] Full expression parser (`x + y * 2`)
- [ ] `agar / warna` execution engine
- [ ] Nested loops
- [ ] Input support (`pucho`)
- [ ] VS Code snippets
- [ ] Formatter
- [ ] Publish to NPM
- [ ] Publish to VS Code Marketplace

---

## 🤝 Contributing

Contributions are welcome!

1. Fork repo
2. Create feature branch
3. Commit changes
4. Open Pull Request

---

## 📄 License

**MIT License**
Free to use, modify, and distribute.

---

## ❤️ Author

**Himanshu**
Creator of Himanshu Programming Language
Built with passion for learning & teaching programming.

---

## ⭐ Support

If you like this project:

- ⭐ Star the repo
- 🐛 Report bugs
- 💡 Suggest features

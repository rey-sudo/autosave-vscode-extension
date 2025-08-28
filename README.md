# Auto Save on Keypress

A Visual Studio Code extension that automatically saves your files shortly after detecting changes in the editor.

## ✨ Features

- Saves the file **600 ms** after the last keypress.
- Works out of the box — no extra setup required.
- Reduces the risk of losing changes by forgetting to save.

## 🚀 Usage

1. Install the extension.
2. Open any file in VS Code.
3. Type normally: the file will be saved automatically in the background.

## ⚙️ Configuration

Currently, the extension does not provide configuration options.  
Future versions may include:
- Custom save delay interval.
- File type inclusion/exclusion.

## 🛠 How it works

The main logic lives in `extension.ts`:

- Listens to `onDidChangeTextDocument` events.
- Resets a timer on every keystroke.
- Automatically saves the active document when 600 ms pass without changes.

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or a pull request on [GitHub](https://github.com/rey-sudo/autosave-vscode-extension).

## 📄 License

[MIT](LICENSE)

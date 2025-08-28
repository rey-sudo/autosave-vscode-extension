import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Extension "auto-save-on-keypress" activated');

    let timeout: NodeJS.Timeout | undefined;

    const disposable = vscode.workspace.onDidChangeTextDocument(async (event) => {
        const editor = vscode.window.activeTextEditor;
        if (!editor || editor.document !== event.document) return;

        if (timeout) clearTimeout(timeout);

        timeout = setTimeout(async () => {
            try {
                await editor.document.save();
                console.log(`File saved automatically: ${editor.document.fileName}`);
            } catch (error) {
                console.error('Error saving the file:', error);
            }
        }, 600);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
    console.log('Extension "auto-save-on-keypress" deactivated');
}

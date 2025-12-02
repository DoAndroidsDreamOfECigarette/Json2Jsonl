import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('jsontojsonl.json2jsonl', () => {
		const editor=vscode.window.activeTextEditor;
		if(editor){
			const oldText=new vscode.Range(
				editor.document.positionAt(0),
				editor.document.positionAt(editor.document.getText().length)
			);
			let midText=editor.document.getText();
			
			midText=midText.replace(/\s+/g,'');
			let newText='';
			let count=0;

			for(let char of midText){
				newText+=char;

				if (char==='{') {
					count++;
				}else if(char==='}'){
					count--;
				}if (count===0) {
					newText+='\n';
				}
			}

			editor.edit((editBuilder)=>{
				editBuilder.replace(oldText,newText);
			});
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
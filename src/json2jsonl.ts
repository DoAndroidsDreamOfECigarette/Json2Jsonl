import * as vscode from "vscode";
import { TextEditor, Range } from "vscode";

function json2jsonl(){
    const editor:TextEditor=vscode.window.activeTextEditor!;
		if(editor){
			const oldText:Range=new vscode.Range(
				editor.document.positionAt(0),
				editor.document.positionAt(editor.document.getText().length)
			);
			let midText:string=editor.document.getText();
			
			midText=midText.replace(/\s+/g,'');
			let newText:string='';
			let stack:string[]=[];

			for(let char of midText){
				newText+=char;

				if (char==='{') {
					stack.push("{");
				}else if(char==='}'){
					stack.pop();
				}if (stack.length===0) {
					newText+='\n';
				}
			}

			editor.edit((editBuilder)=>{
				editBuilder.replace(oldText,newText);
			});
		}
}

export default json2jsonl;
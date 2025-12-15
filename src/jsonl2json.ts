import * as vscode from "vscode";
import { Range, TextEditor } from "vscode";

function jsonl2json(){
    const editor:TextEditor=vscode.window.activeTextEditor!;
    if(!editor){
        return;
    }
    const oldText:Range=new vscode.Range(
        editor.document.positionAt(0),
        editor.document.positionAt(editor.document.getText().length)
    );
    let midText:string=editor.document.getText();
    
    midText=midText.replace(/\s+/g,'');
    let newText:string="";
    let lastchar:string="";
    let stack:string[]=[];

    for(let char of midText){
        if(lastchar){
            newText+=lastchar;
        }
        switch(lastchar){
            case "{":{
                stack.push("{");
                if(char==="}"){break;}
                newText+="\n";
                newText+="\t".repeat(stack.length);
                break;
            }case "[":{
                stack.push("[");
                if(char==="]"){break;}
                newText+="\n";
                newText+="\t".repeat(stack.length);
                break;
            }
            case ",":newText+="\n";newText+="\t".repeat(stack.length);
            default:break;
        }
        if(stack.length===0&&lastchar){
            newText+="\n";
        }
        if(char==="}"||char==="]"){
            stack.pop();
            if(lastchar!=="{"&&lastchar!=="["){
                newText+="\n";newText+="\t".repeat(stack.length);
            }
        }
        lastchar=char;
    }
    newText+=lastchar;

    editor.edit((editBuilder)=>{
        editBuilder.replace(oldText,newText);
    });
}

export default jsonl2json;
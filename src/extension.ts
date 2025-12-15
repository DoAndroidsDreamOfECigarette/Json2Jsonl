import * as vscode from 'vscode';
import json2jsonl from './json2jsonl';
import jsonl2json from './jsonl2json';

export function activate(context: vscode.ExtensionContext) {
	const j2jl=vscode.commands.registerCommand("jsontojsonl.json2jsonl",json2jsonl);
	const jl2j=vscode.commands.registerCommand("jsontojsonl.jsonl2json",jsonl2json);
	context.subscriptions.push(j2jl,jl2j);
}

export function deactivate() {}
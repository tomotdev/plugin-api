import { s } from "../services";

class ScriptDoc {
	private isUsable: boolean = true;

	close(): boolean {
		if (!this.isUsable) return false;
		const [success, _] = this.document.CloseAsync() as [boolean, unknown];

		return success;
	}

	editText(
		newText: string,
		startLine: number,
		startCharacter: number,
		endLine: number,
		endCharacter: number,
	): boolean {
		if (!this.isUsable) return false;

		const [success, _] = this.document.EditTextAsync(newText, startLine, startCharacter, endLine, endCharacter) as [
			boolean,
			unknown,
		];

		return success;
	}

	setSelection(cursorLine: number, cursorCharacter: number, anchorLine: number, anchorCharacter: number): boolean {
		if (!this.isUsable) return false;

		const [success, _] = this.document.ForceSetSelectionAsync(
			cursorLine,
			cursorCharacter,
			anchorLine,
			anchorCharacter,
		) as [boolean, unknown];

        return success;
	}

    getLine(line: number): string {
        if(!this.isUsable) return "";

        return this.document.GetLine(line)
    }

    getLineCount(): number {
        if(!this.isUsable) return -1;

        return this.document.GetLineCount();
    }

    getScript(): LuaSourceContainer | undefined {
        if(!this.isUsable) return undefined;

        return this.document.GetScript();
    }

	constructor(private document: ScriptDocument) {
		document.Destroying.Connect(() => (this.isUsable = false));
	}
}

export { ScriptDoc };

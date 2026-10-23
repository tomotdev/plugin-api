import { s } from "../services";
import { OpenScriptOptions } from "../types";

class Scripts {
	open(sc: BaseScript, params?: OpenScriptOptions) {
		s("ScriptEditorService").OpenScriptDocumentAsync(sc, {
			Temporary: params?.temporary,
			HighlightRange: params &&
				params.highlightRange && {
					Start: {
						Line: params.highlightRange.start.line,
						Character: params.highlightRange.start.character,
					},
					End: {
						Line: params.highlightRange.end.line,
						Character: params.highlightRange.end.character,
					},
				},
		});
	}

	constructor() {}
}

export { Scripts };

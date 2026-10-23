import { s } from "../services";
import { ImportMap } from "../types";

/**
 * Internal class responsible for file import.
 */
class Files {
	/**
	 * Import file(s) based on `importType` and `params`.
	 * @param importType Defines which preset to use for this import. Use `file` for normal behavior.
	 * @param params Required parameters for importation (depends on `importType`).
	 */
	import<K extends keyof ImportMap>(importType: K, params: ImportMap[K]): Instance | Instance[] | undefined {
		switch (importType) {
			case "fbx.animation":
				if ("rig" in params && "isR15" in params)
					return plugin.ImportFbxAnimationAsync(params.rig, params.isR15);
				else error("Wrong parameters were provided.");
			case "fbx.rig":
				if ("isR15" in params) return plugin.ImportFbxRigAsync(params.isR15);
				else error("Wrong parameters were provided.");
			case "file":
				if ("allowedExtensions" in params) {
					const multiple = params.multiple !== undefined ? params.multiple : false;
					const method = multiple ? "PromptImportFilesAsync" : "PromptImportFileAsync";

					return s("StudioService")[method](params.allowedExtensions);
				} else error("Wrong parameters were provided.");
			default:
				error("Wrong import type was provided.");
		}
	}

	constructor() {}
}

export { Files };

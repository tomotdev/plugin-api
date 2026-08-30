import { s } from "./services";
import { ImportMap } from "./types";

class Files {
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

import { s } from "./services";
import { Storable } from "./types";

abstract class Studio {
	get joinMode() {
		return plugin.GetJoinMode();
	}

	get mouse() {
		return plugin.GetMouse();
	}

	get selectedRibbonTool() {
		return plugin.GetSelectedRibbonTool();
	}

	get userId() {
		return s("StudioService").GetUserId();
	}

	getSetting(key: string): Storable {
		return plugin.GetSetting(key) as Storable;
	}

	setSetting(key: string, value: Storable) {
		plugin.SetSetting(key, value);
	}

	constructor() {}
}

export { Studio };

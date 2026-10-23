import { s } from "../services";
import { Storable } from "../types";
import { Scripts } from "./Scripts";
import { Selection } from "./Selection";
import { Theme } from "./Theme";

/**
 * Internal class responsible for Studio interactions, such as user settings, themes, ...
 */
class Studio {
	theme = new Theme();
	scripts = new Scripts();
    selection = new Selection();

	/**
	 * Returns the current join mode.
	 */
	getJoinMode(): Enum.JointCreationMode {
		return plugin.GetJoinMode();
	}

	/**
	 * Returns the current `PluginMouse` instance.
	 */
	getMouse(): PluginMouse {
		return plugin.GetMouse();
	}

	/**
	 * Returns the selected ribbon tool.
	 */
	getSelectedRibbonTool(): Enum.RibbonTool {
		return plugin.GetSelectedRibbonTool();
	}

	/**
	 * Selects a ribbon tool
	 */
	setRibbonTool(tool: Enum.RibbonTool, position: UDim2): void {
		plugin.SelectRibbonTool(tool, position || new UDim2());
	}

	/**
	 * Returns the current user's id.
	 */
	getUserId(): number {
		return s("StudioService").GetUserId();
	}

	/**
	 * Returns the value of the plugin setting assigned to `key`.
	 */
	getSetting(key: string): Storable {
		return plugin.GetSetting(key) as Storable;
	}

	/**
	 * Sets the vakye of a plugin setting.
	 */
	setSetting(key: string, value: Storable): void {
		plugin.SetSetting(key, value);
	}

	constructor() {}
}

export { Studio };

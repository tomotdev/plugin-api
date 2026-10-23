import { Button } from "./Button";

/**
 * API wrapper for `PluginToolbar`.
 */
class Toolbar {
	private toolbar: PluginToolbar;

	/**
 	 * Returns the `PluginToolbar` instance associated with the provided `Toolbar`.
	 */
    static getToolbar(toolbar: Toolbar): PluginToolbar {
        return toolbar.toolbar;
    }

	/**
	 * Creates a `Button`
	 */
	button(id: string, tooltip: string, iconId: string, text?: string): Button {
		return new Button(this, id, tooltip, iconId, text);
	}

	constructor(public name: string) {
		this.toolbar = plugin.CreateToolbar(name);
	}
}

export { Toolbar };

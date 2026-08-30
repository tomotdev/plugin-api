import { Button } from "./Button";

class Toolbar {
	private toolbar: PluginToolbar;

    getToolbar(): PluginToolbar {
        return this.toolbar;
    }

	button(id: string, tooltip: string, iconId: string, text?: string): Button {
		return new Button(this, id, tooltip, iconId, text);
	}

	constructor(public name: string) {
		this.toolbar = plugin.CreateToolbar(name);
	}
}

export { Toolbar };

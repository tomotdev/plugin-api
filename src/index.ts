import { Toolbar } from "./Toolbar";

class Plugin {
	toolbar(name: string): Toolbar {
		return new Toolbar(name);
	}

	activate(exclusiveMouse: boolean = false): this {
		plugin.Activate(exclusiveMouse);
		return this;
	}

	deactivate(): this {
		plugin.Deactivate();
		return this;
	}

	isActivated(): boolean {
		return plugin.IsActivated();
	}

	isActivatedWithExclusiveMouse(): boolean {
		return plugin.IsActivatedWithExclusiveMouse();
	}

	constructor(name: string) {}
}

export { Plugin };

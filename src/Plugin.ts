import { Files } from "./internal/Files";
import { Toolbar } from "./objects/Toolbar";
import { Studio } from "./internal/Studio";
import { World } from "./internal/World";

class Plugin {
	files = new Files();
	studio = new Studio();
	world = new World();

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

	constructor(private readonly name: string) {}
}

export { Plugin };

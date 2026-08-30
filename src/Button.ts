import { Toolbar } from "./Toolbar";

class Button {
	private button: PluginToolbarButton;
	private _active: boolean = false;

	public clickableWhenViewportHidden: boolean = false;

	onClick(func: () => void): this {
		this.button.Click.Connect(func);
        return this;
	}

	get active() {
		return this._active;
	}

	set active(active: boolean) {
		this._active = active;
		this.button.SetActive(active);
	}

	get enabled() {
		return this.button.Enabled;
	}

	set enabled(enabled: boolean) {
		this.button.Enabled = enabled;
	}

	constructor(
		toolbar: Toolbar,
		public readonly id: string,
		tooltip: string,
		icon: string,
		text?: string,
	) {
		this.button = toolbar.getToolbar().CreateButton(id, tooltip, icon, text);

		plugin.Deactivation.Connect(() => ((this._active = false), this.button.SetActive(false)));
	}
}

export { Button };

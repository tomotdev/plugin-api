import { Toolbar } from "./Toolbar";

/**
 * API wrapper of `PluginToolbarButton`.
 */
class Button {
	private button: PluginToolbarButton;
	private _active: boolean = false;

	/**
	 * If `true`, the button will still be clickable if the user does not have focus on the DataModel (for example, when editing a script).
	 */
	public clickableWhenViewportHidden: boolean = false;

	/**
	 * Adds a function to call when the `Button` is clicked.
	 */
	onClick(func: () => void): this {
		this.button.Click.Connect(func);
        return this;
	}

	/**
	 * Whether the button is considered as active (hovered in black).
	 */
	get active() {
		return this._active;
	}

	set active(active: boolean) {
		this._active = active;
		this.button.SetActive(active);
	}

	/**
	 * Whether the button is enabled (clickable).
	 */
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

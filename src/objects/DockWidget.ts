import { DockWidgetParams } from "../types";

/**
 * API wrapper for `DockWidgetPluginGui`.
 */
class DockWidget {
	private widget: DockWidgetPluginGui;
	private ui: Instance | undefined = undefined;

	/**
	 * Sets the `DockWidget` title.
	 */
	setTitle(title: string): this {
		this.widget.Title = title;
		return this;
	}

	/**
	 * Places the provided UI object inside the `DockWidget`.
	 */
	bindUI(ui: Instance): this {
		this.ui = ui;
		ui.Parent = this.widget;
		return this;
	}

	/**
	 * Removes the UI from the `DockWidget`, but it can still be modified.
	 */
	unbindUI(): this {
		if (this.ui) this.ui.Parent = undefined;

		return this;
	}

	/**
	 * Shows the `DockWidget`.
	 */
	show(): this {
		this.widget.Enabled = true;
		return this;
	}

	/**
	 * Hides the `DockWidget`.
	 */
	hide(): this {
		this.widget.Enabled = false;
		return this;
	}

	constructor(
		public readonly id: string,
		params: DockWidgetParams,
	) {
		this.widget = plugin.CreateDockWidgetPluginGuiAsync(
			id,
			new DockWidgetPluginGuiInfo(
				params.position,
				false,
				undefined,
				params.floatWidth,
				params.floatHeight,
				params.minWidth,
				params.minHeight,
			),
		);

		this.widget.Title = id;
	}
}

export { DockWidget };

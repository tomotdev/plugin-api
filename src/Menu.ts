import { Action } from "./Action";

class Menu {
	private menu: PluginMenu;

	getMenu(): PluginMenu {
		return this.menu;
	}

	/**
	 * Adds an action to the menu
	 */
	addAction(action: Action): this {
		this.menu.AddAction(action.getAction());
		return this;
	}

	/**
	 * Adds multiple actions to the menu
	 */
	addActions(actions: Action[]): this {
		for (let i = 0; i < actions.size(); i++) {
			const action = actions[i];
			this.addAction(action);
		}

		return this;
	}

	/**
	 * Adds a sub menu
	 */
	addSubmenu(menu: Menu): this {
		this.menu.AddMenu(menu.getMenu());
		return this;
	}

	/**
	 * Adds a separator between menu items
	 */
	addSeparator(): this {
		this.menu.AddSeparator();
		return this;
	}

	/**
	 * Clears the menu content
	 */
	clear(): this {
		this.menu.Clear();
		return this;
	}

	/**
	 * Displays the menu to the user
	 * @returns The id of the Action that was selected, or undefined if the menu was closed
	 */
	display(): string | undefined {
		const result = this.menu.ShowAsync() as PluginAction | undefined;

		return result ? result.ActionId : undefined;
	}

	constructor(
		public readonly id: string,
		public readonly title?: string,
		public readonly icon?: string,
	) {
		this.menu = plugin.CreatePluginMenu(id, title, icon);
	}
}

export { Menu };

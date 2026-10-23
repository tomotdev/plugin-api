/**
 * API wrapper of `PluginAction`.
 */
class Action {
	private action: PluginAction;

	/**
	 * Returns the `PluginAction` instance associated with the provided `Action`.
	 */
    static getAction(action: Action): PluginAction {
        return action.action;
    }

    /**
     * A function to call when the `Action` is triggered.
     */
	triggered(func: () => void): this {
		this.action.Triggered.Connect(func);
		return this;
	}

	constructor(
		public readonly id: string,
		public readonly text: string,
		public readonly statusTip: string,
		icon?: string,
		allowBinding?: boolean,
	) {
		this.action = plugin.CreatePluginAction(id, text, statusTip, icon, allowBinding);
	}
}

export { Action };

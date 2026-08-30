class Action {
	private action: PluginAction;

    getAction(): PluginAction {
        return this.action;
    }

    /**
     * An function to call when the `Action` is called.
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
		this.action = plugin.CreatePluginAction(id, text, statusTip, icon);
	}
}

export { Action };

export interface DockWidgetParams {
	/**
	 * Where the DockWidget should be placed
	 */
	position: Enum.InitialDockState;

	/**
	 * DockWidget width (when floating)
	 */
	floatWidth: number;

	/**
	 * DockWidget height (when floating)
	 */
	floatHeight: number;

	/**
	 * Minimum DockWidget width
	 */
	minWidth: number;

	/**
	 * Minimum DockWidget height
	 */
	minHeight: number;
}

export type Storable = string | number | boolean | object | any[] | undefined;

export type ImportMap = {
	"fbx.animation": {
		rig: Instance;
		isR15: boolean;
	};

	"fbx.rig": {
		isR15: boolean;
	};

	file: {
		allowedExtensions: string[];
		multiple?: boolean;
	};
};

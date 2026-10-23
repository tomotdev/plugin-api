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

export interface ImportMap {
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

export interface ClassIconInfos {
	image: string;
	imageRectOffset: Vector2;
	imageRectSize: Vector2;
}

/**
 * Screenshot capture parameters
 */
export interface CaptureInfos {
	/**
	 * Position of top-left corner of the capture
	 */
	position: Vector2;

	/**
	 * Size of the capture
	 */
	size: Vector2;

	/**
	 * Size of the output of the capture.
	 */
	outputSize?: Vector2;

	/**
	 * If `outputSize` is bigger than `size`, defines how the resampler mode.
	 */
	resampleMode?: Enum.ResamplerMode;

	/**
	 * Defines the screenshot's output format.
	 */
	format?: Enum.StudioCaptureScreenshotFormat;

	/**
	 * Defines whether to include UI in the capture.
	 */
	uiCaptureMode?: Enum.UICaptureMode;
}

/**
 * Script open options
 */
export interface OpenScriptOptions {
	/**
	 * Whether to open the script in a preview mode
	 */
	temporary?: boolean;

	/**
	 * If defined, highlights the provided range
	 */
	highlightRange?: {
		start: {
			line: number;
			character: number;
		};
		end: {
			line: number;
			character: number;
		}
	}
}
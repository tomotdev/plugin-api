import { s } from "../services";
import { ClassIconInfos } from "../types";

class Theme {
	getClassIcon(className: keyof Instances): ClassIconInfos {
		const internalInfos = s("StudioService").GetClassIcon(className) as Record<string, any>;

		return {
			image: internalInfos.Image,
			imageRectOffset: internalInfos.ImageRectOffset,
			imageRectSize: internalInfos.ImageRectSize,
		};
	}

	getScriptSetting<K extends keyof Studio>(key: K): Studio[K] {
		return s("Studio")[key];
	}

	getColor(item: Enum.StudioStyleGuideColor, modifier?: Enum.StudioStyleGuideModifier): Color3 {
		return s("Studio").Theme.GetColor(item, modifier);
	}

	constructor() {}
}

export { Theme };

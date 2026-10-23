import { s } from "../services";
import { CaptureInfos } from "../types";

/**
 * Internal class responsible for captures.
 */
class Capture {
    /**
     * Returns whether the plugin can take a screenshot.
     */
	canCapture(): boolean {
        return s("StudioCaptureService").CanCaptureScreenshot()
    }

    /**
     * If possible, takes a screenshot with the provided parameters and returns a `StudioScreenshotCapture` representing it.
     */
    captureScreenshot(infos: CaptureInfos): StudioScreenshotCapture {
        return s("StudioCaptureService").CaptureScreenshot({
            Position: infos.position,
            Size: infos.size,
            OutputSize: infos.outputSize || infos.size,
            ResampleMode: infos.resampleMode,
            Format: infos.format,
            UICaptureMode: infos.uiCaptureMode
        })
    }

    /**
     * Asks the user for permission to take a screenshot, and returns whether the user accepted or denied.
     */
    requestScreenshotPermission(): boolean {
        s("StudioPublishService")
        return s("StudioCaptureService").RequestScreenshotPermissionAsync()
    }
    
    constructor() {}
}

export { Capture };

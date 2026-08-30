export {};

declare global {
    interface PluginToolbarButton {
        Enabled: boolean;
    }

    interface DockWidgetPluginGui extends PluginGui {
        Title: string;
    }

    interface PluginAction {
        ActionId: string;
    }
}
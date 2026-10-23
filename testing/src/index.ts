import { Plugin, Action } from "../../src/";

const plugin = new Plugin("abc");
const toolbar = plugin.toolbar("ABC");
const button = toolbar.button("abc", "Abc", "rbxassetid://0", "ABC");

const action = new Action("abc", "Abc", "Abccc", "rbxassetid://0", false);

button.onClick(() => {
	print("ok");
});

plugin.files.import("file", { allowedExtensions: ["png"], multiple: false });
export function s<K extends keyof Services>(name: K): Services[K] {
	return game.GetService(name);
}

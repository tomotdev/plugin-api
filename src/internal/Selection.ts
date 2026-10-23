import { s } from "../services";

class Selection {
	get(): Instance[] {
		return s("Selection").Get();
	}

	set(instances: Instance[]): void {
		s("Selection").Set(instances);
	}

	add(instances: Instance[]): void {
		s("Selection").Add(instances);
	}

	remove(instances: Instance[]): void {
		s("Selection").Remove(instances);
	}

	constructor() {}
}

export { Selection }
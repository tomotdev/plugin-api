class World {
	union(parts: Part[]): UnionOperation {
		return plugin.Union(parts);
	}

	intersect(parts: Part[]): IntersectOperation | undefined {
		return plugin.Intersect(parts) as IntersectOperation | undefined;
	}

	negate(parts: Part[]): NegateOperation[] {
		return plugin.Negate(parts) as NegateOperation[];
	}

	separate(unions: UnionOperation[]): BasePart[] {
		return plugin.Separate(unions) as BasePart[];
	}

    constructor() {}
}

export { World };

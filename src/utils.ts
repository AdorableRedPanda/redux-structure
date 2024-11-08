import type { GNode, ID, Position, Relation } from '@/types';

export const getRelationKey = ([from, to]: Relation) => `${from} => ${to}`;

export const isEqual = (p1: Position, p2: Position) =>
	Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);

export const newID = (): ID => crypto.randomUUID();

export const newNode = (partial: Partial<GNode>): GNode => {
	const id = newID();
	return {
		value: `new node ${id.slice(0, 5)}...`,
		id,
		parent: null,
		children: [],
		position: { x: 520, y: 520 },
		...partial,
	};
};

export const getDependents = (nodes: GNode[], id: ID): ID[] => {
	const set = new Set([id]);

	const childrenMap = nodes.reduce(
		(accum, n) => {
			accum[n.id] = n.children;
			return accum;
		},
		{} as Record<ID, ID[]>,
	);

	const stack = [childrenMap[id]];

	while (stack.length) {
		const children = stack.pop() || [];
		children.forEach((childId) => {
			set.add(childId);
			stack.push(childrenMap[childId]);
		});
	}

	return [...set];
};

type Classname = boolean | null | string | undefined;
export const clsJoin = (...classes: Classname[]) =>
	classes.filter(Boolean).join(' ');

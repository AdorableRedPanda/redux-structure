import type { AppStore, ID, Relation, WithId } from '@/types';

export const nodesSelector = (state: AppStore) => state.project.nodes;
export const nodeSelector =
	({ id }: WithId) =>
	(state: AppStore) =>
		state.project.nodes.find((n) => n.id === id);

export const relationsSelector = (state: AppStore): Relation<ID>[] => {
	return nodesSelector(state).flatMap(({ id, children }) =>
		children.map((child) => [id, child]).filter((relation) => relation.length),
	);
};

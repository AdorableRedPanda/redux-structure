import type { AppStore } from '@/types';

export const edgesSelector = (state: AppStore) =>
	state.project.edges.edges || [];

export const connectionStateSelector = (state: AppStore) =>
	state.project.edges.newEdgeSource;

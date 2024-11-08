import type { createAction } from '@reduxjs/toolkit';

export type ID = string;

export interface WithId {
	id: ID;
}

export interface WithIds {
	ids: ID[];
}

export type Relation<TType = ID> = [TType, TType];

export interface GNode<TValue = string> extends WithId {
	value: string;
	children: ID[];
	position: Position;
	parent: ID | null;
}

export interface Edge extends WithId {
	relation: Relation;
}

export interface Position {
	x: number;
	y: number;
}

export type NodesStore = GNode[];
export interface EdgesStore {
	newEdgeSource: ID | null;
	edges: Edge[];
}

export interface ProjectStore {
	nodes: NodesStore;
	edges: EdgesStore;
}

export interface AppStore {
	project: ProjectStore;
}

export interface ClientStore extends AppStore {
	history: HistoryStore;
}

export type HistoryItem = ReturnType<typeof createAction>;

export type HistoryStore = HistoryItem[];

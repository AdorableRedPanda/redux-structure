import { combineReducers } from '@reduxjs/toolkit';
import { nodesReducer } from '@/store/core/nodes';
import { edgesReducer } from '@/store/core/edges';
import { all } from '@redux-saga/core/effects';
import { nodeRelations } from '@/store/core/shared';

export const projectReducer = combineReducers({
	nodes: nodesReducer,
	edges: edgesReducer,
});

export function* rootMiddleware() {
	yield all([nodeRelations()]);
}

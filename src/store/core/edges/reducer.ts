import { createReducer } from '@reduxjs/toolkit';
import type { EdgesStore } from '@/types';
import { EdgeActions } from './actions';
import { newID } from '@/utils';
import { InitialStore } from '../constants';

export const edgesReducer = createReducer<EdgesStore>(
	InitialStore.edges,
	(builder) => {
		builder
			.addCase(EdgeActions.delete, (state, { payload: { id } }) => ({
				...state,
				edges: state.edges.filter((n) => n.id !== id),
			}))
			.addCase(EdgeActions.deleteBy, (state, { payload: { ids } }) => {
				const deleteIds = new Set(ids);
				return {
					...state,
					edges: state.edges.filter(
						({ relation: [from, to] }) =>
							!deleteIds.has(from) && !deleteIds.has(to),
					),
				};
			})
			.addCase(EdgeActions.startConnection, (state, { payload }) => ({
				...state,
				newEdgeSource: payload.id,
			}))
			.addCase(EdgeActions.cancelConnection, (state) => ({
				...state,
				newEdgeSource: null,
			}))
			.addCase(EdgeActions.create, (state, { payload }) => ({
				newEdgeSource: null,
				edges: [...state.edges, { id: newID(), relation: payload }],
			}));
	},
);

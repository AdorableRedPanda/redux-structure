import { createReducer } from '@reduxjs/toolkit';
import type { NodesStore } from '@/types';
import { NodesActions } from './actions';
import { newID, newNode } from '@/utils';
import { InitialStore } from '../constants';

export const nodesReducer = createReducer<NodesStore>(
	InitialStore.nodes,
	(builder) => {
		builder
			.addCase(
				NodesActions.updatePosition,
				(state, { payload: { id, position } }) => {
					const node = state.find((n) => n.id === id);
					if (!node) {
						return state;
					}
					return [...state.filter((n) => n.id !== id), { ...node, position }];
				},
			)
			.addCase(NodesActions.delete, (state, { payload: { ids } }) => {
				const deleteIds = new Set(ids);

				return state
					.filter((n) => !deleteIds.has(n.id))
					.map((n) => ({
						...n,
						children: n.children.filter((i) => !deleteIds.has(i)),
					}));
			})

			.addCase(NodesActions.addChild, (state, { payload: { id } }) => {
				const newId = newID();
				const child = newNode({ parent: id, id: newId });

				return state
					.map((n) => {
						if (n.id !== id) {
							return n;
						}

						return { ...n, children: [newId, ...n.children] };
					})
					.concat(child);
			})
			.addCase(NodesActions.addNew, (state) => [...state, newNode({})])
			.addCase(NodesActions.updateValue, (state, { payload: { id, value } }) =>
				state.map((n) => {
					if (n.id !== id) {
						return n;
					}

					return { ...n, value };
				}),
			);
	},
);

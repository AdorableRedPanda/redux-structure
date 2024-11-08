import { HistoryCommitAction as Commit } from './history';
import { useDispatch, useSelector } from 'react-redux';
import {
	connectionStateSelector,
	edgesSelector,
} from '@/store/core/edges/selectors';
import type { ID, Position } from '@/types';
import { EdgeActions, NodesActions } from '@/store/core';

export const useGetEdges = () => useSelector(edgesSelector);

export const useConnectionState = () => useSelector(connectionStateSelector);

export const useEdgeActions = (id: ID) => {
	const dispatch = useDispatch();

	return {
		delete: () => dispatch(Commit(EdgeActions.delete({ id }))),
		create: (from: ID, to: ID) =>
			dispatch(Commit(EdgeActions.create([from, to]))),
	};
};

export const useConnectionActions = (id: ID) => {
	const dispatch = useDispatch();

	return {
		startConnection: () => dispatch(EdgeActions.startConnection({ id })),
		cancelConnection: () => dispatch(EdgeActions.cancelConnection()),
	};
};

import { HistoryCommitAction } from '@/store/client/history';
import { nodesSelector, relationsSelector } from '@/store/core/nodes/seletors';

export const useGetNodes = () => useSelector(nodesSelector);

export const useCreateNode = () => {
	const dispatch = useDispatch();

	return () => dispatch(HistoryCommitAction(NodesActions.addNew()));
};

export const useNodeActions = (id: ID) => {
	const dispatch = useDispatch();

	return {
		delete: () =>
			dispatch(HistoryCommitAction(NodesActions.batchDelete({ id }))),
		move: (position: Position) =>
			dispatch(
				HistoryCommitAction(NodesActions.updatePosition({ id, position })),
			),
		addChild: () =>
			dispatch(HistoryCommitAction(NodesActions.addChild({ id }))),
		updateValue: (value: string) =>
			dispatch(HistoryCommitAction(NodesActions.updateValue({ id, value }))),
	};
};

export const useNodesDependencies = () => useSelector(relationsSelector);

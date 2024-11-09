import { HistoryCommitAction as Commit } from './history';
import { useDispatch, useSelector } from 'react-redux';
import {
	nodesSelector,
	relationsSelector,
	connectionStateSelector,
	edgesSelector,
	EdgeActions,
	NodesActions,
} from '@/store/core';

import type { ID, Position } from '@/types';

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

export const useGetNodes = () => useSelector(nodesSelector);

export const useCreateNode = () => {
	const dispatch = useDispatch();

	return () => dispatch(Commit(NodesActions.addNew()));
};

export const useNodeActions = (id: ID) => {
	const dispatch = useDispatch();

	return {
		delete: () => dispatch(Commit(NodesActions.batchDelete({ id }))),
		move: (position: Position) =>
			dispatch(Commit(NodesActions.updatePosition({ id, position }))),
		addChild: () => dispatch(Commit(NodesActions.addChild({ id }))),
		updateValue: (value: string) =>
			dispatch(Commit(NodesActions.updateValue({ id, value }))),
	};
};

export const useNodesDependencies = () => useSelector(relationsSelector);

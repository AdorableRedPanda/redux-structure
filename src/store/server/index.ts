import { createStore } from './store';
import { NodesActions } from '@/store/core';
import { HistoryCommitAction, ServerHistory } from './history';

function run() {
	const store = createStore();

	console.log(
		'nodes:',
		store.getState().project.nodes.length,
		'edges:',
		store.getState().project.edges.edges.length,
		'history:',
		ServerHistory,
	);

	store.dispatch(
		HistoryCommitAction(
			NodesActions.batchDelete({ id: 'be3f34b2-1da8-426f-87b0-425131ab73c4' }),
		),
	);
	store.dispatch(
		HistoryCommitAction(
			NodesActions.batchDelete({ id: '30af29a0-51da-4a55-a132-1427b7022aaa' }),
		),
	);

	console.log(
		'nodes: ',
		store.getState().project.nodes.length,
		'edges: ',
		store.getState().project.edges.edges.length,
		'history: ',
		ServerHistory,
	);
}

run();

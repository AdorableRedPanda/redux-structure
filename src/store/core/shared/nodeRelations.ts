import { all, put, select, takeEvery } from '@redux-saga/core/effects';
import type { GNode } from '@/types';
import { getDependents } from '@/utils';

import { EdgeActions } from '../edges';
import { nodesSelector, NodesActions } from '../nodes';

function* deleteNode(action: ReturnType<typeof NodesActions.batchDelete>) {
	const nodes: GNode[] = yield select(nodesSelector);
	const dependentNodes = getDependents(nodes, action.payload.id);

	yield put(EdgeActions.deleteBy({ ids: dependentNodes }));
	yield put(NodesActions.delete({ ids: dependentNodes }));
}

export function* nodeRelations() {
	yield all([takeEvery(NodesActions.batchDelete.type, deleteNode)]);
}

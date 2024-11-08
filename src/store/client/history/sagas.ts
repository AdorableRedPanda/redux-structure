import { all, put, takeEvery } from '@redux-saga/core/effects';
import { HistoryCommitAction, HistoryPush } from './actions';

function* commit(action: ReturnType<typeof HistoryCommitAction>) {
	yield put(HistoryPush(action.payload));
	yield put({ ...action.payload });
}

export function* historySagas() {
	yield all([takeEvery(HistoryCommitAction.type, commit)]);
}

import { createAction } from '@reduxjs/toolkit';
import type { HistoryItem } from '@/types';
import { all, put, takeEvery } from '@redux-saga/core/effects';

export const HistoryCommitAction = createAction<HistoryItem>(
	'HISTORY_COMMIT_SERVER',
);

export const ServerHistory: HistoryItem[] = [];

function* commit(action: ReturnType<typeof HistoryCommitAction>) {
	ServerHistory.push(action.payload);
	yield put({ ...action.payload });
}

export function* historySagas() {
	yield all([takeEvery(HistoryCommitAction.type, commit)]);
}

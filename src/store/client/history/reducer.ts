import { createReducer } from '@reduxjs/toolkit';
import type { HistoryStore } from '@/types';
import { HistoryPush } from './actions';

export const historyReducer = createReducer<HistoryStore>([], (builder) => {
	builder.addCase(HistoryPush, (state, { payload }) => [...state, payload]);
});

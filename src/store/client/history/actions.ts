import { createAction } from '@reduxjs/toolkit';
import type { HistoryItem } from '@/types';

export const HistoryCommitAction = createAction<HistoryItem>('HISTORY_COMMIT');

export const HistoryPush = createAction<HistoryItem>('HISTORY_PUSH');

import { createAction } from '@reduxjs/toolkit';
import type { WithId } from '@/types';
import type { Relation } from '@/types';
import type { WithIds } from '@/types';

export const EdgeActions = {
	create: createAction<Relation>('EDGES_CREATE_NEW'),
	delete: createAction<WithId>('EDGES_DELETE'),
	deleteBy: createAction<WithIds>('EDGES_DELETE_BY'),
	startConnection: createAction<WithId>('EDGES_START_CONNECTION'),
	cancelConnection: createAction('EDGES_CANCEL_CONNECTION'),
	completeConnection: createAction<WithId>('EDGES_COMPLETE_CONNECTION'),
};

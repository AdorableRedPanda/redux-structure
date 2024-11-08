import { createAction } from '@reduxjs/toolkit';
import type { WithId, WithIds } from '@/types';
import type { UpdatePositionPayload, UpdateValuePayload } from './types';

export const NodesActions = {
	delete: createAction<WithIds>('NODES_DELETE'),
	batchDelete: createAction<WithId>('BATCH_NODES_DELETE'),
	updatePosition: createAction<UpdatePositionPayload>('NODES_UPDATE_POSITION'),
	addNew: createAction('NODES_ADD_NEW'),
	addChild: createAction<WithId>('NODES_ADD_CHILD'),
	updateValue: createAction<UpdateValuePayload>('NODES_UPDATE_VALUE'),
};

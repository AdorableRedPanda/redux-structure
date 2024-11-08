import type { Position, WithId } from '@/types';

export interface UpdatePositionPayload extends WithId {
	position: Position;
}

export interface UpdateValuePayload extends WithId {
	value: string;
}

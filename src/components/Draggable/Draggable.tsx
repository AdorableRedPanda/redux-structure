import type { Position } from '@/types';
import type React from 'react';
import DraggableItem, { type DraggableEventHandler } from 'react-draggable';
import { useCallback } from 'react';
import { isEqual } from '@/utils';
interface Props extends React.PropsWithChildren {
	onDragStop: (next: Position) => void;
	position: Position;
	onDrag: () => void;
}

export const Draggable: React.FC<Props> = ({
	position,
	children,
	onDrag,
	onDragStop,
}) => {
	const handleStop: DraggableEventHandler = useCallback(
		(ev, data) => {
			if (!isEqual(position, data)) {
				return;
			}

			onDragStop({ x: data.x, y: data.y });
		},
		[onDragStop, position],
	);

	return (
		<DraggableItem
			bounds="parent"
			onDrag={onDrag}
			position={position}
			onStop={handleStop}
		>
			{children}
		</DraggableItem>
	);
};

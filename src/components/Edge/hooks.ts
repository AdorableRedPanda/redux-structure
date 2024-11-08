import type { ID } from '@/types';
import { useEdgeActions } from '@/store/client';
import { useState } from 'react';

export const useArrowProps = (id: ID) => {
	const { delete: deleteEdge } = useEdgeActions(id);
	const [isHovered, setIsHovered] = useState(false);

	return {
		color: isHovered
			? 'var(--color-arrow-edge-hover)'
			: 'var(--color-arrow-edge)',
		passProps: {
			onClick: deleteEdge,
			style: {
				cursor: 'pointer',
				strokeWidth: isHovered ? 4 : 3,
			},
			onMouseEnter: () => setIsHovered(true),
			onMouseLeave: () => setIsHovered(false),
		},
	};
};

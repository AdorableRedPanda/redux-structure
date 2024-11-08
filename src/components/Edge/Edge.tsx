import type { Edge as StoreEdge } from '@/types';
import type React from 'react';
import { Arrow } from '../Arrow';
import { useArrowProps } from '@/components/Edge/hooks';

interface Props {
	edge: StoreEdge;
}

export const Edge: React.FC<Props> = ({
	edge: {
		id,
		relation: [from, to],
	},
}) => {
	const { color, passProps } = useArrowProps(id);

	return (
		<Arrow
			curveness={0.4}
			color={color}
			start={from}
			end={to}
			showHead={false}
			passProps={passProps}
		/>
	);
};

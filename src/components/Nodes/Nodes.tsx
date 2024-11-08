import type React from 'react';
import { useGetNodes } from '@/store/client';
import { Node } from '../Node';
import css from './styles.module.css';

export const Nodes: React.FC = () => {
	const nodes = useGetNodes();

	return (
		<div className={css.drag_boundary}>
			{nodes.map((n) => (
				<Node node={n} key={n.id} />
			))}
		</div>
	);
};

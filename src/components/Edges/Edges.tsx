import type React from 'react';
import { useGetEdges, useNodesDependencies } from '@/store/client';

import { Arrow } from '../Arrow';
import { getRelationKey } from '@/utils';

export const Edges: React.FC = () => {
	const edges = useGetEdges();
	const dependencies = useNodesDependencies();

	return (
		<>
			{dependencies.map((rel) => (
				<Arrow
					directed
					color="var(--color-edge-dependency)"
					relation={rel}
					key={getRelationKey(rel)}
				/>
			))}
			{edges.map((e) => (
				<Arrow
					color="var(--color-edge-relation)"
					relation={e.relation}
					key={e.id}
				/>
			))}
		</>
	);
};

import type React from 'react';
import { useGetEdges, useNodesDependencies } from '@/store/client';
import { getRelationKey } from '@/utils';
import { Edge } from '../Edge';
import { Dependency } from '@/components/Dependency';

export const Edges: React.FC = () => {
	const edges = useGetEdges();
	const dependencies = useNodesDependencies();

	return (
		<>
			{dependencies.map((rel) => (
				<Dependency relation={rel} key={getRelationKey(rel)} />
			))}
			{edges.map((e) => (
				<Edge edge={e} key={e.id} />
			))}
		</>
	);
};

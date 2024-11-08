import type React from 'react';
import { Arrow } from '../Arrow';
import type { Relation } from '@/types';

interface Props {
	relation: Relation;
}

export const Dependency: React.FC<Props> = ({ relation: [from, to] }) => (
	<Arrow
		curveness={0.4}
		color="var(--color-arrow-edge)"
		start={from}
		end={to}
		showHead
	/>
);

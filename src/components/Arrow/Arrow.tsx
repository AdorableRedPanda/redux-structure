import type { Relation } from '@/types';
import Xarrow from 'react-xarrows';
import type React from 'react';

export interface Props {
	relation: Relation;
	color: string;
	directed?: boolean;
}

export const Arrow: React.FC<Props> = ({
	relation: [from, to],
	color,
	directed,
}) => (
	<Xarrow
		curveness={0.4}
		showHead={directed}
		color={color}
		start={from}
		end={to}
	/>
);

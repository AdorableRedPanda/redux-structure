import type { IconType } from './types';
import type React from 'react';
import { IconPaths } from './constants';

interface Props {
	type: IconType;
}

export const Icon: React.FC<Props> = ({ type }) => (
	<svg
		role="img"
		aria-label="icon"
		title={type}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 500 500"
	>
		<path d={IconPaths[type]} />
	</svg>
);

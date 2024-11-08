import type { IconType } from './types';
import type React from 'react';
import { IconClasses } from './constants';

interface Props {
	type: IconType;
	className?: string;
}

export const Icon: React.FC<Props> = ({ type, className = '' }) => (
	<i className={`${IconClasses[type]} ${className}`} />
);

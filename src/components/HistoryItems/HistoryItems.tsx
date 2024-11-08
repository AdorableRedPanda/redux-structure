import type React from 'react';
import css from './css.module.css';
import type { HistoryItem } from '@/types';

interface Props {
	items: HistoryItem[];
}

export const HistoryItems: React.FC<Props> = ({ items }) => {
	return (
		<ul className={css.items}>
			{items.map((item, i) => (
				<li key={i.toString()}>{item.type}</li>
			))}
		</ul>
	);
};

import type React from 'react';
import { useGetHistory } from '@/store/client';
import css from './css.module.css';
import { HistoryHeader } from '@/components/HistoryHeader';
import { HistoryItems } from '@/components/HistoryItems';

export const History: React.FC = () => {
	const history = useGetHistory();
	return (
		<div className={css.history}>
			<HistoryHeader />
			<HistoryItems items={history} />
		</div>
	);
};

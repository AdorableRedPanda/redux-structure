import css from './css.module.css';
import type React from 'react';

export const HistoryHeader: React.FC = () => (
	<div className={css.header}>
		<span className={css.title}>Custom history</span>
	</div>
);

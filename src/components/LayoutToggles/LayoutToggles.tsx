import css from './css.module.css';
import type React from 'react';
import { Checkbox } from '@/components/Checkbox';

interface Props {
	devtools: boolean;
	setDevtools: (next: boolean) => void;
	history: boolean;
	setHistory: (next: boolean) => void;
}
export const LayoutToggles: React.FC<Props> = ({
	devtools,
	setDevtools,
	history,
	setHistory,
}) => (
	<div className={css.actions}>
		<Checkbox value={devtools} label="Devtools" onChange={setDevtools} />
		<Checkbox value={history} label="Custom history" onChange={setHistory} />
	</div>
);

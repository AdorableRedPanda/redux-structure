import css from './css.module.css';
import type React from 'react';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';

interface Props {
	onCreate: () => void;
	devtools: boolean;
	setDevtools: (next: boolean) => void;
	history: boolean;
	setHistory: (next: boolean) => void;
}
export const HeaderActions: React.FC<Props> = ({
	onCreate,
	devtools,
	setDevtools,
	history,
	setHistory,
}) => (
	<div className={css.actions}>
		<Button title="Create new node" label="New node" onClick={onCreate} />
		<Checkbox value={devtools} label="Devtools" onChange={setDevtools} />
		<Checkbox value={history} label="Custom history" onChange={setHistory} />
	</div>
);

import css from './css.module.css';
import type React from 'react';
import { type ChangeEventHandler, useCallback } from 'react';

interface Props {
	value: boolean;
	onChange: (next: boolean) => void;
	label: string;
}

export const Checkbox: React.FC<Props> = ({ value, onChange, label }) => {
	const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
		(ev) => {
			onChange(ev.target.checked);
		},
		[onChange],
	);
	return (
		<label className={css.container}>
			<input
				className={css.checkbox}
				type="checkbox"
				checked={value}
				onChange={handleChange}
			/>
			<span className={css.label}>{label}</span>
		</label>
	);
};

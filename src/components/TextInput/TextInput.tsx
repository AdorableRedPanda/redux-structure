import type React from 'react';
import type { ChangeEventHandler } from 'react';
import css from './css.module.css';

interface Props {
	value: string;
	onChange: (next: string) => void;
	className: string;
}

export const TextInput: React.FC<Props> = ({ value, onChange, className }) => {
	const handleChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
		onChange(ev.target.value);
	};

	return (
		<input
			draggable={false}
			className={`${css.input} ${className}`}
			type="text"
			value={value}
			onChange={handleChange}
		/>
	);
};

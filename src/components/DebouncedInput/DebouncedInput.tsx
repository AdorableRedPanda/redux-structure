import type React from 'react';
import { useCallback, useState } from 'react';
import { useDebounce } from '@/components/DebouncedInput/hooks';
import { TextInput } from '@/components/TextInput';

interface Props {
	value: string;
	onChange: (next: string) => void;
	className: string;
	delay: number;
}

export const DebouncedInput: React.FC<Props> = ({
	value,
	delay,
	onChange,
	className,
}) => {
	const [state, setState] = useState(value);

	const waitedChange = useDebounce(onChange, delay);

	const handleChange = useCallback(
		(next: string) => {
			setState(next);
			waitedChange(next);
		},
		[waitedChange],
	);

	return (
		<TextInput value={state} onChange={handleChange} className={className} />
	);
};

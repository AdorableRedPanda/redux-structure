import { useCallback, useRef } from 'react';

type Callback<TArg> = (arg: TArg) => void;

export const useDebounce = <TArg>(cb: Callback<TArg>, delay: number) => {
	const timeoutRef = useRef<null | number>(null);

	return useCallback(
		(arg: TArg) => {
			if (timeoutRef.current !== null) {
				window.clearTimeout(timeoutRef.current as number);
			}

			timeoutRef.current = window.setTimeout(() => cb(arg), delay);
		},
		[cb, delay],
	);
};

import { useSelector } from 'react-redux';
import type { ClientStore } from '@/types';

export const useGetHistory = () => {
	return useSelector((state: ClientStore) => state.history);
};

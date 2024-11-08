import type { ID } from '@/types';
import {
	useConnectionActions,
	useConnectionState,
	useEdgeActions,
} from '@/store/client';
import type { IconType } from '@/components/Icon';

type ButtonConfig = [IconType, string, () => void];
export const useConnection = (id: ID): ButtonConfig => {
	const { create } = useEdgeActions(id);
	const { startConnection, cancelConnection } = useConnectionActions(id);
	const connectionId = useConnectionState();

	if (connectionId === null) {
		return ['edge', 'Add connection', startConnection];
	}

	if (connectionId === id) {
		return ['xmark', 'Cancel', cancelConnection];
	}

	return ['merge', 'Connect', () => create(connectionId as ID, id)];
};

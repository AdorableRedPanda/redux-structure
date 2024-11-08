import type React from 'react';
import type { WithId } from '@/types';
import { Button } from '@/components/Button';
import { useConnection } from '@/components/ConnectionButton/hooks';

export const ConnectionButton: React.FC<WithId> = ({ id }) => {
	const [icon, title, cb] = useConnection(id);

	return <Button icon={icon} title={title} onClick={cb} />;
};

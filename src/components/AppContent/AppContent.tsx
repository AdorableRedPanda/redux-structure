import type React from 'react';
import { History } from '../History';

import css from './styles.module.css';
import { DevTools } from '../DevTools';
import { AppHeader } from '../AppHeader';
import { useCreateNode } from '@/store/client';
import { Project } from '../Project';
import { useState } from 'react';
import { clsJoin } from '@/utils';
import { HeaderActions } from '../HeaderActions';

export const AppContent: React.FC = () => {
	const createNode = useCreateNode();
	const [showDevtools, setShowDevtools] = useState(true);
	const [showHistory, setShowHistory] = useState(true);

	const className = clsJoin(
		css.content,
		showDevtools && css.show_devtools,
		showHistory && css.show_history,
	);

	return (
		<div className={css.container}>
			<AppHeader>
				<HeaderActions
					history={showHistory}
					devtools={showDevtools}
					onCreate={createNode}
					setHistory={setShowHistory}
					setDevtools={setShowDevtools}
				/>
			</AppHeader>
			<div className={className}>
				<Project />
				<DevTools />
				<History />
			</div>
		</div>
	);
};

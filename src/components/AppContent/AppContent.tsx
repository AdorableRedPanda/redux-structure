import type React from 'react';
import { History } from '../History';

import css from './styles.module.css';
import { DevTools } from '../DevTools';
import { AppHeader } from '../AppHeader';
import { useCreateNode } from '@/store/client';
import { Project } from '../Project';
import { useState } from 'react';
import { clsJoin } from '@/utils';
import { LayoutToggles } from '../LayoutToggles';
import { Button } from '@/components/Button';

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
				<LayoutToggles
					history={showHistory}
					devtools={showDevtools}
					setHistory={setShowHistory}
					setDevtools={setShowDevtools}
				/>
			</AppHeader>
			<div className={className}>
				<Project />
				<DevTools />
				<History />
				<div className={css.create}>
					<Button
						title="Create new node"
						label="New node"
						onClick={createNode}
					/>
				</div>
			</div>
		</div>
	);
};

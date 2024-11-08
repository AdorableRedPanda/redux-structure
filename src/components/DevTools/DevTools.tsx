import { createDevTools } from '@redux-devtools/core';
import { InspectorMonitor } from '@redux-devtools/inspector-monitor';
import './styles.css';

export const DevTools = createDevTools(
	<InspectorMonitor invertTheme={false} />,
);

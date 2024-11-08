import type * as React from 'react';
import { StoreProvider } from '@/store/client';
import './styles/reset.css';
import './styles/tokens.css';
import { AppContent } from '@/components/AppContent';
export const App: React.FC = () => (
	<StoreProvider>
		<AppContent />
	</StoreProvider>
);

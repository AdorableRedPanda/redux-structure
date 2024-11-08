import css from './styles.module.css';
import { Nodes } from '@/components/Nodes';
import { Edges } from '@/components/Edges';
import type React from 'react';
import { Xwrapper } from '@/components/Arrow';

export const Project: React.FC = () => (
	<div className={css.project}>
		<Xwrapper>
			<Nodes />
			<Edges />
		</Xwrapper>
	</div>
);

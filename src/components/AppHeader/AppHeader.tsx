import type React from 'react';
import css from './styles.module.css';
export const AppHeader: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<header className={css.header}>
			<h1>Redux-demo</h1>
			<div className={css.children}>{children}</div>
			<a
				href="https://github.com/AdorableRedPanda/redux-structure-demo"
				target="_blank"
				className={css.link}
				rel="noreferrer"
			>
				Github
			</a>
		</header>
	);
};

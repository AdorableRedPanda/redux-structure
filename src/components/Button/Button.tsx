import type React from 'react';
import css from './css.module.css';
import { Icon, type IconType } from '../Icon';
interface Props {
	title: string;
	onClick: () => void;
	icon?: IconType;
	label?: string;
}

export const Button: React.FC<Props> = ({
	onClick,
	title,
	icon,
	label = '',
}) => (
	<button title={title} className={css.button} type="button" onClick={onClick}>
		{icon && <Icon type={icon} />}
		<span className={css.label}>{label}</span>
	</button>
);

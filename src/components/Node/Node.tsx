import type { GNode } from '@/types';
import type React from 'react';
import { useNodeActions } from '@/store/client';
import { useXarrow } from '../Arrow';
import { Draggable } from '../Draggable';
import css from './css.module.css';
import { Button } from '../Button';
import { ConnectionButton } from '../ConnectionButton';
import { DebouncedInput } from '../DebouncedInput';

interface Props {
	node: GNode;
}

export const Node: React.FC<Props> = ({ node: { id, value, position } }) => {
	const {
		delete: deleteNode,
		move,
		addChild,
		updateValue,
	} = useNodeActions(id);
	const updateArrow = useXarrow();

	return (
		<Draggable onDrag={updateArrow} position={position} onDragStop={move}>
			<div className={css.node} id={id}>
				<div className={css.value}>
					<span>Value:</span>
					<DebouncedInput
						className={css.input}
						value={value}
						onChange={updateValue}
						delay={500}
					/>
				</div>
				<div className={css.actions}>
					<Button icon="trash" title="Delete" onClick={deleteNode} />
					<Button icon="fork" title="Add child" onClick={addChild} />
					<ConnectionButton id={id} />
				</div>
			</div>
		</Draggable>
	);
};

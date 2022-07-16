import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../helpers/ItemTypes'
const Card = ({
	name,
	text,
	children,
	className,
	id,
	left,
	top,
	hideSourceOnDrag,
}) => {
	// hideSourceOnDrag = true
	const [{ isDragging }, drag] = useDrag(() => ({
		type: ItemTypes.BOX,
		item: { name, text, children, className},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
			handlerId: monitor.getHandlerId(),
		}),
	}))
	const opacity = isDragging ? 0.4 : 1
	const border = isDragging ? '5px solid #000': 'none'
	if (isDragging && hideSourceOnDrag) {
		return <div ref={drag} />
	}
	return (
		<div
			ref={drag}
			style={{ opacity, border }}
			className={`card p-3 mb-3 ${className ? className : ''}`}
			data-testid={`box`}
		>
			<h3>{text}</h3>
			{children}
		</div>
	)
}

export default Card

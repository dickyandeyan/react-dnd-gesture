import update from 'immutability-helper'
import { useCallback, useState } from 'react'
import { useDrop } from 'react-dnd'
import Card from '../Card/Card'
import { ItemTypes } from '../../helpers/ItemTypes'

const styles = {
	width: '100%',
	height: 300,
	border: '1px solid black',
	position: 'relative',
	overflow: 'hidden'
}
export const ContainerNaive = ({ hideSourceOnDrag }) => {
	const [boxes, setBoxes] = useState({
		a: { top: 20, left: 80, title: 'Drag me around' },
		b: { top: 180, left: 20, title: 'Drag me too' },
	})
	const moveBox = useCallback(
		(id, left, top) => {
			setBoxes(
				update(boxes, {
					[id]: {
						$merge: { left, top },
					},
				})
			)
		},
		[boxes, setBoxes]
	)
	const [, drop] = useDrop(
		() => ({
			accept: ItemTypes.BOX,
			drop(item, monitor) {
				const delta = monitor.getDifferenceFromInitialOffset()
				const left = Math.round(item.left + delta.x)
				const top = Math.round(item.top + delta.y)
				moveBox(item.id, left, top)
				return undefined
			},
		}),
		[moveBox]
	)
	return (
		<div ref={drop} style={styles}>
			{Object.keys(boxes).map((key) => {
				const { left, top, title } = boxes[key]
				return (
					<Card
						text={title}
						className="bg-success text-white w-50"
						name="card"
						key={key}
						id={key}
						left={left}
						top={top}
						hideSourceOnDrag={hideSourceOnDrag}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
						illo.
					</Card>
				)
			})}
		</div>
	)
}

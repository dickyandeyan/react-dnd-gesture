import { useState } from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../helpers/ItemTypes'
import Card from '../Card/Card'
const style = {
	height: '500px',
	width: '500px',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	color: '#000',
	padding: '1rem',
	textAlign: 'center',
	fontSize: '1rem',
	lineHeight: 'normal',
	float: 'left',
	overflow: 'scroll',
	border: '1px solid #000'
}
export const Dustbin = () => {
	const [dustbin, setDustbin] = useState([])

	const [{ canDrop, isOver }, drop] = useDrop(
		() => ({
			accept: ItemTypes.BOX,
			drop: (item) => (setCardProperty(item)),
			collect: (monitor) => ({
				isOver: monitor.isOver(),
				canDrop: monitor.canDrop(),
			}),
		})
	)
	
	const setCardProperty = (data) => {
		if (data.name) {
			setDustbin(array => [...array, data])
		}
	}
	const isActive = canDrop && isOver

	let backgroundColor = '#FFF'
	if (isActive) {
		backgroundColor = 'darkgreen'
	} else if (canDrop) {
		backgroundColor = 'darkkhaki'
	}

	return (
		<div ref={drop} style={{ ...style, backgroundColor }} className="mb-5" data-testid="dustbin">
			{isActive ? 'Release to drop' : 'Drag a box here'}
			{dustbin.map((card, i) => {
				return (
					<Card key={i} text={card.text} className={card.className}>{card.children}</Card>
				)
			})}
		</div>
	)
}

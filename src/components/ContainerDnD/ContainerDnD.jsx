import { memo } from 'react'
import Card from '../Card/Card'
import { Dustbin } from '../Dustbin/Dustbin'
export const Container = memo(function Container() {
	return (
		<div>
			<div style={{ overflow: 'hidden', clear: 'both' }}>
				<Dustbin />
			</div>
		</div>
	)
})

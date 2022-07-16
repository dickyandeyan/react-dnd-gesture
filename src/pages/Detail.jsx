import React from 'react'
import BaseLayout from '../components/BaseLayout/BaseLayout'
import Logo from '../components/Logo/Logo'
import Sidebar from '../components/Sidebar/Sidebar'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

const Detail = () => {
	const [{ x, y, width, height }, api] = useSpring(() => ({
		x: 0,
		y: 0,
		width: 100,
		height: 100,
	}))
	const bind = useDrag(({ down, offset: [x, y] }) => {
		api.start({ x, y, immediate: down })
	})
	return (
		<BaseLayout>
			<div className="container-fluid ps-0">
				<div className="row">
					<div className="col-12 col-md-4 col-lg-2">
						<Sidebar />
					</div>
					<div className="col-md-8 col-lg-10" style={{ overflow: 'hidden' }}>
						<animated.div
							{...bind()}
							style={{
								x,
								y,
								touchAction: 'none',
								cursor: 'move',
								width: 'max-content',
							}}
						>
							<Logo className="App-logo" />
						</animated.div>
					</div>
				</div>
			</div>
		</BaseLayout>
	)
}

export default Detail

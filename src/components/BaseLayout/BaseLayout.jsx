import React from 'react'
import { Link } from 'react-router-dom'

const BaseLayout = (props) => {
	return (
		<div className="min-vh-100">
			<nav className="navbar bg-dark ">
				<div className="container-fluid ps-4">
					<Link to="/">
						<h3 className="text-white">Navbar</h3>
					</Link>
					<Link to="/detail">
						<h3 className="text-white">Drag Around</h3>
					</Link>
				</div>
			</nav>
			{props.children}
		</div>
	)
}

export default BaseLayout

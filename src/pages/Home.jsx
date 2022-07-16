import React from 'react'
import BaseLayout from '../components/BaseLayout/BaseLayout'
import Sidebar from '../components/Sidebar/Sidebar'
import { Container } from '../components/ContainerDnD/ContainerDnD'
// import { ContainerNaive } from '../components/ContainerNaive/ContainerNaive'

const Home = () => {
	return (
		
			<BaseLayout>
				<div className="container-fluid ps-0">
					<div className="row">
						<div className="col-12 col-md-4 col-lg-2">
							<Sidebar />
						</div>
						<div className="col-md-8 col-lg-10">
							<div className="content_area d-flex justify-content-center align-items-center h-100">
								<Container />
							</div>
						</div>
					</div>
				</div>
				{/* <div>Home</div> */}
			</BaseLayout>
	)
}

export default Home

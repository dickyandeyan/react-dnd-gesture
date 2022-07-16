import React from 'react'
import styles from './Sidebar.module.scss'
import Card from '../Card/Card'
import Logo from '../Logo/Logo'

const Sidebar = () => {
	return (
		<div className={`bg-dark ${styles.text_white} ${styles.full_height} p-3`}>
			<div className={styles.component_wrapper}>
				<Logo />
				<h6 className='mb-0'>React Logo</h6>
			</div>
			<div className={styles.component_wrapper}>
				<Card text="Card" className="bg-primary" name="card">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, tempora expedita. Exercitationem iste tempore ipsum quod sint, expedita nam eum nobis inventore beatae animi quidem quam laudantium quos magni repudiandae.
				</Card>
			</div>
		</div>
	)
}

export default Sidebar

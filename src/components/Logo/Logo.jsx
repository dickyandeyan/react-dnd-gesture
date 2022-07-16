import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from '@use-gesture/react'
import logo from '../../logo.svg'
import '../../App.css'

const Logo = (props) => {
	return <img src={logo} alt="logo.svg" className={props.className} />
}

export default Logo

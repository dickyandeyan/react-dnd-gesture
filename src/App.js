import Home from './pages/Home'
import Detail from './pages/Detail'
import { Routes, Route, Link } from 'react-router-dom'


function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/detail" element={<Detail />}></Route>
		</Routes>
	)
}

export default App

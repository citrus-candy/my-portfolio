import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import BackgroundAnimation from './components/BackgroundAnimation'
import Top from './components/Top'
import Works from './components/Works'
import About from './components/About'

render(
	<BrowserRouter>
		<BackgroundAnimation />
		<Routes>
			<Route path="/">
				<Route index element={<Top />} />
				<Route path="works" element={<Works />} />
				<Route path="about" element={<About />} />
			</Route>
		</Routes>
	</BrowserRouter>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

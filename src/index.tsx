import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import BackgroundAnimation from './components/modules/BackgroundAnimation'
import Top from './components/pages/Top'
import Works from './components/pages/Works'
import About from './components/pages/About'
import Header from './components/modules/Header'

render(
	<BrowserRouter>
		<BackgroundAnimation />
		<Header />
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

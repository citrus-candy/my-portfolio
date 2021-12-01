import { createGlobalStyle } from 'styled-components'
import Header from './Header'

const GlobalStyle = createGlobalStyle`
	body {
		background-color: #F5B3CB;
	}
`

export default function About() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<h1>About Page</h1>
		</>
	)
}

import { createGlobalStyle } from 'styled-components'
import Header from './Header'

const GlobalStyle = createGlobalStyle`
	body {
		background-color: #B3F5F1;
	}
`

export default function Top() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<h1>Top Page</h1>
		</>
	)
}

import { createGlobalStyle } from 'styled-components'
import Header from './Header'

const GlobalStyle = createGlobalStyle`
	body {
		background-color: #3f51b5;
	}
`

export default function Top() {
	return (
		<>
			<GlobalStyle />
			<Header />
		</>
	)
}

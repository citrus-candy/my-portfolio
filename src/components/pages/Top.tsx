import { createGlobalStyle } from 'styled-components'

const BodyColor = createGlobalStyle`
	body {
		background-color: #3f51b5;
	}
`

export default function Top() {
	return (
		<>
			<BodyColor />
		</>
	)
}

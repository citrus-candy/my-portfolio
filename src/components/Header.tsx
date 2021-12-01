import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderStyle = styled.div`
	font-size: 3rem;
	display: flex;
	justify-content: flex-end;
	margin-top: 40px;
`

const LinkStyle = styled.div`
	text-align: center;
	padding: 0 40px;
	font-family: 'Fredericka the Great', cursive;
`

export default function Header() {
	return (
		<HeaderStyle>
			<LinkStyle>
				<Link to="/">Top</Link>
			</LinkStyle>
			<LinkStyle>
				<Link to="/works">Works</Link>
			</LinkStyle>
			<LinkStyle>
				<Link to="/about">About</Link>
			</LinkStyle>
		</HeaderStyle>
	)
}

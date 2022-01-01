import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
	font-size: 2rem;
	display: flex;
	justify-content: flex-end;
	margin-top: 40px;
	position: fixed;
	right: 10px;
`

const Wrapper = styled.div`
	text-align: center;
	padding: 0 40px;
	font-family: 'Fredericka the Great', cursive;
	& a {
		text-decoration: none;
		color: white;
	}
`

export default function Header() {
	return (
		<Container>
			<Wrapper>
				<Link to="/">Top</Link>
			</Wrapper>
			<Wrapper>
				<Link to="/works">Works</Link>
			</Wrapper>
			<Wrapper>
				<Link to="/about">About</Link>
			</Wrapper>
		</Container>
	)
}

import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CardStyle = styled.div`
	width: 210px;
	height: 210px;
	margin: 20px;
	background-image: url('https://picsum.photos/500/300?image=15');
	background-position: center;
	border: solid;
	filter: blur(3px);
`

export default function WorksCard() {
	return (
		<Link to="/works/1">
			<CardStyle />
		</Link>
	)
}

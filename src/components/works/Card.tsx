import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Works } from '../../../types/microcms'

type CardProps = {
	row?: string
	column?: string
	content: Works
}

const CardLink = styled(Link)<{ row?: string; column?: string }>`
	grid-row: ${(props) => props.row || '1 / 1'};
	grid-column: ${(props) => props.column || '1 / 1'};
`

const Card = styled.div<{ image?: string }>`
	width: 100%;
	height: 100%;
	background-image: url(${(props) => props.image});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	/* transform: scale(0.9); */
`

export default function WorksCard(props: CardProps) {
	return (
		<CardLink
			to={`/works/${props.content.id}`}
			row={props.row}
			column={props.column}
		>
			<Card image={props.content.image?.url} />
		</CardLink>
	)
}

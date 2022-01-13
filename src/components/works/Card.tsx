import { Link } from 'react-router-dom'
import styled from 'styled-components'

type CardProps = {
	row?: string
	column?: string
	width?: string
	height?: string
}

const CardStyle = styled.div<CardProps>`
	grid-row: ${(props) => props.row || '1 / 1'};
	grid-column: ${(props) => props.column || '1 / 1'};
	width: ${(props) => props.width || '100%'};
	height: ${(props) => props.height || '100%'};
	background-image: url('https://picsum.photos/500/300?image=14');
	background-position: center;
	background-repeat: no-repeat;
	transform: scale(0.9);
`

export default function WorksCard(props: CardProps) {
	return (
		<Link to="/works/1">
			<CardStyle
				row={props.row}
				column={props.column}
				width={props.width}
				height={props.height}
			/>
		</Link>
	)
}

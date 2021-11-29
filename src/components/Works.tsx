import Header from './Header'
import WorksCard from './works/Card'
import styled from 'styled-components'

const ContentsWrapperStyle = styled.div`
	padding: 40px 20px;
`

const ContentsStyle = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const TitleStyle = styled.div`
	font-size: 2rem;
	font-family: 'Fredericka the Great', cursive;
`

export default function Works() {
	return (
		<div>
			<Header />
			<ContentsWrapperStyle>
				<TitleStyle>
					Web
					<hr />
				</TitleStyle>
				<ContentsStyle>
					<WorksCard />
					<WorksCard />
					<WorksCard />
					<WorksCard />
					<WorksCard />
					<WorksCard />
				</ContentsStyle>
			</ContentsWrapperStyle>
			<ContentsWrapperStyle>
				<TitleStyle>
					Music
					<hr />
				</TitleStyle>
				<ContentsStyle>
					<WorksCard />
					<WorksCard />
					<WorksCard />
					<WorksCard />
					<WorksCard />
					<WorksCard />
				</ContentsStyle>
			</ContentsWrapperStyle>
		</div>
	)
}

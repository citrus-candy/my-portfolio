import Header from './Header'
import WorksCard from './works/Card'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	body {
		background-color: #009688;
	}
`

const ContentsWrapperStyle = styled.div`
	padding: 40px 20px;
`

const ContentsStyle = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const TitleStyle = styled.div`
	font-size: 3rem;
	font-family: 'Josefin Sans', sans-serif;
	border-bottom: solid 1px;
	margin-bottom: 10px;
	color: white;
`

export default function Works() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<ContentsWrapperStyle>
				<TitleStyle>Web</TitleStyle>
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
				<TitleStyle>Music</TitleStyle>
				<ContentsStyle>
					<WorksCard />
					<WorksCard />
					<WorksCard />
					<WorksCard />
					<WorksCard />
					<WorksCard />
				</ContentsStyle>
			</ContentsWrapperStyle>
		</>
	)
}

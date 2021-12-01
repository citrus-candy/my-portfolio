import Header from './Header'
import WorksCard from './works/Card'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

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
`

const GlobalStyle = createGlobalStyle`
	body {
		background-color: #B3F5C6;
	}
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

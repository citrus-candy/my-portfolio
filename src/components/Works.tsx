import WorksCard from './works/Card'
import styled, { createGlobalStyle } from 'styled-components'

const BodyColor = createGlobalStyle`
	body {
		background-color: #009688;
	}
`

const Container = styled.div`
	padding-top: 80px;
`

const Wrapper = styled.div`
	padding: 40px 20px;
`

const Title = styled.div`
	font-size: 2.5rem;
	font-family: 'Josefin Sans', sans-serif;
	border-bottom: solid 1px;
	margin-bottom: 10px;
	color: white;
`

const WorksContainer = styled.div`
	display: grid;
	grid-template-rows: 200px 200px 200px;
	grid-template-columns: 20% 20% 20% 20% 20%;
`

export default function Works() {
	return (
		<Container>
			<BodyColor />
			<Wrapper>
				<Title>Programming</Title>
				<WorksContainer>
					<WorksCard row="1 / 2" column="1 / 2" />
					<WorksCard row="1 / 2" column="2 / 4" width="200%" />
				</WorksContainer>
			</Wrapper>
			<Wrapper>
				<Title>Music</Title>
				<WorksContainer>
					<WorksCard />
				</WorksContainer>
			</Wrapper>
		</Container>
	)
}

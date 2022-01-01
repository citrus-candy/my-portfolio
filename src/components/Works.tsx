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
	font-size: 3rem;
	font-family: 'Josefin Sans', sans-serif;
	border-bottom: solid 1px;
	margin-bottom: 10px;
	color: white;
`

const WorksContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`

export default function Works() {
	return (
		<Container>
			<BodyColor />
			<Wrapper>
				<Title>Web</Title>
				<WorksContainer>
					<WorksCard />
					<WorksCard />
					<WorksCard />
					<WorksCard />
					<WorksCard />
					<WorksCard />
				</WorksContainer>
			</Wrapper>
			<Wrapper>
				<Title>Music</Title>
				<WorksContainer>
					<WorksCard />
					<WorksCard />
					<WorksCard />
					<WorksCard />
					<WorksCard />
					<WorksCard />
				</WorksContainer>
			</Wrapper>
		</Container>
	)
}

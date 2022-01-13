import WorksCard from './works/Card'
import styled, { createGlobalStyle } from 'styled-components'
import Yobirinkun from '../assets/images/yobirinkun.png'
import SummerScoringApp from '../assets/images/summer-scoring-app.png'
import ShachihokoDiary from '../assets/images/shachihoko-diary.png'
import Nayamin from '../assets/images/nayamin.png'
import PrehackSns from '../assets/images/prehack-sns.png'
import C3OpenCampus from '../assets/images/c3-open-campus.png'
import UnityActionGame from '../assets/images/unity-action-game.png'

const BodyColor = createGlobalStyle`
	body {
		background-color: #009688;
	}
`

const Container = styled.div`
	padding-top: 80px;
`

const Wrapper = styled.div`
	width: 1200px;
	margin: auto;
	padding: 40px 20px;
`

const Title = styled.div`
	font-size: 2.5rem;
	font-family: 'Josefin Sans', sans-serif;
	border-bottom: solid 1px;
	margin-bottom: 20px;
	color: white;
`

const WorksContainer = styled.div`
	display: grid;
	justify-content: center;
	grid-template-rows: 200px 200px 200px;
	grid-template-columns: 200px 200px 200px 200px 200px;
	grid-gap: 10px 10px;
`

export default function Works() {
	return (
		<Container>
			<BodyColor />
			<Wrapper>
				<Title>Programming</Title>
				<WorksContainer>
					<WorksCard row="1 / 2" column="1 / 2" image={Yobirinkun} />
					<WorksCard row="1 / 2" column="2 / 4" image={ShachihokoDiary} />
					<WorksCard row="1 / 2" column="4 / 6" image={PrehackSns} />
					<WorksCard row="2 / 3" column="1 / 3" image={Nayamin} />
					<WorksCard row="2 / 4" column="3 / 4" image={SummerScoringApp} />
					<WorksCard row="2 / 3" column="4 / 6" image={C3OpenCampus} />
					<WorksCard row="3 / 4" column="1 / 3" image={UnityActionGame} />
				</WorksContainer>
			</Wrapper>
			<Wrapper>
				<Title>Music</Title>
				<WorksContainer></WorksContainer>
			</Wrapper>
		</Container>
	)
}

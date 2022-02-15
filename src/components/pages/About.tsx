import styled from 'styled-components'
import { FaGithub, FaTwitter, FaTimes } from 'react-icons/fa'

const Container = styled.div`
	padding-top: 80px;
`

const CardContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 40px;
	font-size: 2.2rem;
	font-family: 'Crafty Girls', cursive;
`

const Card = styled.div`
	width: 350px;
	height: 60px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: white;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const ContentsWrapper = styled.div`
	width: 1000px;
	font-family: 'Josefin Sans', sans-serif;
	margin: auto;
	padding: 40px;
	color: white;
`

const Title = styled.div`
	border-bottom: solid 1px;
	font-size: 2.5rem;
`

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 1.5rem;
	padding: 25px;
`

const IconButton = styled.a`
	height: 40px;
	color: black;
`

export default function About() {
	return (
		<Container>
			<CardContainer>
				<Card>citrus candy</Card>
				<Card>
					<FaTimes />
					<IconButton
						href="https://github.com/citrus-candy"
						target="_blank"
						rel="noreferrer"
					>
						<FaGithub size="2.5rem" attributeType="" />
					</IconButton>
					<IconButton
						href="https://twitter.com/fillis_y"
						target="_blank"
						rel="noreferrer"
					>
						<FaTwitter size="2.5rem" />
					</IconButton>
					<FaTimes />
				</Card>
			</CardContainer>
			<ContentsWrapper>
				<Title>Skills</Title>
				<Content>
					<p>Languages</p>
					<p>HTML / CSS / JavaScript / TypeScript</p>
				</Content>
				<Content>
					<p>Frameworks</p>
					<p>Vue.js / Nuxt.js / React.js</p>
				</Content>
				<Content>
					<p>NativeApps</p>
					<p>Flutter</p>
				</Content>
				<Content>
					<p>Other</p>
					<p>Firebase / GCP / GitHub</p>
				</Content>
			</ContentsWrapper>
		</Container>
	)
}

import styled from 'styled-components'
import { FaGithub, FaTwitter } from 'react-icons/fa'

const Container = styled.div`
	padding-top: 80px;
`

const Name = styled.div`
	font-size: 3rem;
	font-family: 'Italianno', cursive;
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

const IconButtonsWrapper = styled.div`
	display: flex;
`

const IconButton = styled.a`
	display: flex;
	align-items: center;
	margin: 0 20px;
	color: black;
`

export default function About() {
	return (
		<Container>
			<ContentsWrapper>
				<Content>
					<Name>f i l l</Name>
					<IconButtonsWrapper>
						<IconButton
							href="https://github.com/citrus-candy"
							target="_blank"
							rel="noreferrer"
						>
							<FaGithub size={40} />
						</IconButton>
						<IconButton
							href="https://twitter.com/fillis_y"
							target="_blank"
							rel="noreferrer"
						>
							<FaTwitter size={40} />
						</IconButton>
					</IconButtonsWrapper>
				</Content>
			</ContentsWrapper>
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

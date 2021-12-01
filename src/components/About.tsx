import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { FaGithub, FaTwitter, FaTimes } from 'react-icons/fa'
import Header from './Header'

const GlobalStyle = createGlobalStyle`
	body {
		background-color: #F5B3CB;
	}
`

const TopStyle = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 40px;
	font-size: 2.2rem;
	font-family: 'Crafty Girls', cursive;
`

const TopContentStyle = styled.div`
	width: 350px;
	height: 60px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: white;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const BottomStyle = styled.div`
	font-family: 'Josefin Sans', sans-serif;
	padding: 40px;
`

const BottomTitleStyle = styled.div`
	border-bottom: solid 1px;
	font-size: 3rem;
`

const BottomContentStyle = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 2rem;
	padding: 25px;
`

export default function About() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<TopStyle>
				<TopContentStyle>citrus candy</TopContentStyle>
				<TopContentStyle>
					<FaTimes />
					<a
						href="https://github.com/citrus-candy"
						target="_blank"
						rel="noreferrer"
						style={{ height: '40px' }}
					>
						<FaGithub size="2.5rem" attributeType="" />
					</a>
					<a
						href="https://twitter.com/fillis_y"
						target="_blank"
						rel="noreferrer"
						style={{ height: '40px' }}
					>
						<FaTwitter size="2.5rem" />
					</a>
					<FaTimes />
				</TopContentStyle>
			</TopStyle>
			<BottomStyle>
				<BottomTitleStyle>Skills</BottomTitleStyle>
				<BottomContentStyle>
					<p>Languages</p>
					<p>HTML / CSS / JavaScript / TypeScript</p>
				</BottomContentStyle>
				<BottomContentStyle>
					<p>Frameworks</p>
					<p>Vue.js / Nuxt.js / React.js</p>
				</BottomContentStyle>
				<BottomContentStyle>
					<p>NativeApps</p>
					<p>Flutter</p>
				</BottomContentStyle>
				<BottomContentStyle>
					<p>Other</p>
					<p>Firebase / GCP / GitHub</p>
				</BottomContentStyle>
			</BottomStyle>
		</>
	)
}

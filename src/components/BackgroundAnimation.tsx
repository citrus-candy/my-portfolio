import styled, { keyframes } from 'styled-components'

const AreaStyle = styled.div`
	background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
	width: 100%;
	height: 100vh;
	position: fixed;
	z-index: -1;
	overflow: hidden;
`

const CirclesStyle = styled.ul`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`

const Animate = keyframes`
  0% {
		transform: translateY(0) rotate(0deg);
		opacity: 1;
		border-radius: 0;
	}

	100% {
		transform: translateY(-1000px) rotate(720deg);
		opacity: 0;
		border-radius: 50%;
	}
`

const CircleStyle = styled.li`
	position: absolute;
	display: block;
	list-style: none;
	width: 20px;
	height: 20px;
	background: rgba(255, 255, 255, 0.2);
	animation: ${Animate} 25s linear infinite;
	bottom: -150px;
`

export default function BackgroundAnimation() {
	return (
		<AreaStyle>
			<CirclesStyle>
				<CircleStyle
					style={{
						left: '25%',
						width: '80px',
						height: '80px',
						animationDelay: '0s',
					}}
				></CircleStyle>
				<CircleStyle
					style={{
						left: '10%',
						width: '20px',
						height: '20px',
						animationDelay: '2s',
						animationDuration: '12s',
					}}
				></CircleStyle>
				<CircleStyle
					style={{
						left: '70%',
						width: '20px',
						height: '20px',
						animationDelay: '4s',
					}}
				></CircleStyle>
				<CircleStyle
					style={{
						left: '40%',
						width: '60px',
						height: '60px',
						animationDelay: '0s',
						animationDuration: '18s',
					}}
				></CircleStyle>
				<CircleStyle
					style={{
						left: '65%',
						width: '20px',
						height: '20px',
						animationDelay: '0s',
					}}
				></CircleStyle>
				<CircleStyle
					style={{
						left: '75%',
						width: '110px',
						height: '110px',
						animationDelay: '3s',
					}}
				></CircleStyle>
				<CircleStyle
					style={{
						left: '35%',
						width: '150px',
						height: '150px',
						animationDelay: '7s',
					}}
				></CircleStyle>
				<CircleStyle
					style={{
						left: '50%',
						width: '25px',
						height: '25px',
						animationDelay: '15s',
						animationDuration: '45s',
					}}
				></CircleStyle>
				<CircleStyle
					style={{
						left: '20%',
						width: '15px',
						height: '15px',
						animationDelay: '2s',
						animationDuration: '35s',
					}}
				></CircleStyle>
				<CircleStyle
					style={{
						left: '85%',
						width: '150px',
						height: '150px',
						animationDelay: '0s',
						animationDuration: '11s',
					}}
				></CircleStyle>
			</CirclesStyle>
		</AreaStyle>
	)
}

import { useLayoutEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled, { css } from 'styled-components'

const Container = styled.ul`
	font-size: 2rem;
	display: flex;
	justify-content: flex-end;
	margin-top: 40px;
	position: fixed;
	right: 10px;
	list-style: none;
`

const Wrapper = styled.li<{ isCurrent: boolean }>`
	text-align: center;
	padding: 0 40px;
	font-family: 'Fredericka the Great', cursive;
	& a {
		text-decoration: none;
		color: white;
		position: relative;
	}
	& a::after {
		content: '';
		/* 絶対配置で線の位置を決める */
		position: absolute;
		bottom: 0;
		left: 10%;
		/* 線の形状 */
		width: 80%;
		height: 1px;
		background: white;
		/* アニメーションの指定 */
		transition: all 0.3s;
		transform: scale(0, 1); /* X方向0、Y方向1 */
		transform-origin: center top; /* 上部中央基点 */
	}
	${(props) =>
		props.isCurrent
			? css`
					& a::after {
						transform: scale(1, 1); /* X方向にスケール拡大 */
					}
			  `
			: ''}
	& a:hover::after {
		transform: scale(1, 1); /* X方向にスケール拡大 */
	}
`

export default function Header() {
	const linkUrls = ['', 'works', 'about']
	let [currentPath, setCurrentPath] = useState('')
	const location = useLocation()

	useLayoutEffect(() => {
		setCurrentPath(location.pathname.split('/')[1])
	}, [location.pathname])

	return (
		<Container>
			<Wrapper isCurrent={currentPath === linkUrls[0]}>
				<Link to={linkUrls[0]}>Top</Link>
			</Wrapper>
			<Wrapper isCurrent={currentPath === linkUrls[1]}>
				<Link to={linkUrls[1]}>Works</Link>
			</Wrapper>
			<Wrapper isCurrent={currentPath === linkUrls[2]}>
				<Link to={linkUrls[2]}>About</Link>
			</Wrapper>
		</Container>
	)
}

import WorksCard from '../modules/WorksCard'
import styled from 'styled-components'
import { createClient, MicroCMSListResponse } from 'microcms-js-sdk'
import { useEffect, useState } from 'react'
import { Works as WorksType } from '../../../types/microcms'

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
	const [contents, setContents] = useState<WorksType[]>([])

	useEffect(() => {
		const client = createClient({
			serviceDomain: process.env.REACT_APP_MICROCMS_DOMAIN!,
			apiKey: process.env.REACT_APP_MICROCMS_APIKEY!,
		})
		client
			.getList({
				endpoint: 'works',
			})
			.then((res: MicroCMSListResponse<WorksType>) => {
				setContents(res.contents)
			})
	}, [])

	if (contents.length !== 0) {
		console.log(contents)
		return (
			<Container>
				<Wrapper>
					<Title>Programming</Title>
					<WorksContainer>
						{contents.map((content) => {
							return (
								<WorksCard
									row={content.row}
									column={content.column}
									content={content}
								/>
							)
						})}
					</WorksContainer>
				</Wrapper>
				<Wrapper>
					<Title>Music</Title>
					<WorksContainer></WorksContainer>
				</Wrapper>
			</Container>
		)
	} else {
		return <Container></Container>
	}
}

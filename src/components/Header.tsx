import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<div className="header">
			<Link to="/">Top</Link>
			<Link to="/works">Works</Link>
			<Link to="/about">About</Link>
		</div>
	)
}

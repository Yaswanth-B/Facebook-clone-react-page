import LeftBarLink from './LeftBarLink'
import {useEffect, useState} from 'react'
const LeftBar = () => {
	const [shortcutlinks, setShortcuts ] = useState([])
	const [implinks, setImpLinks ] = useState([])
	

	useEffect(() => {
		fetch(`http://localhost:5000/leftbar/getshortcuts`)
		.then(response => response.json())
		.then(data => setShortcuts(data))
	}, [])

	useEffect(() => {
		fetch(`http://localhost:5000/leftbar/getimplinks`)
		.then(response => response.json())
		.then(data => setImpLinks(data))
	}, [])

	return (
		<div className="left-sidebar">
			<div className="imp-links">
				{implinks.map((imp) => <LeftBarLink iconlink={imp.link} text={imp.text} />)}				
				<a href="#">See More</a>
			</div>
			<div className="shortcut-link">
				<p>Your Shortcuts</p>
				{shortcutlinks.map((short) => <LeftBarLink iconlink={short.link} text={short.text} />)}			
			</div>
		</div>
	)
}

export default LeftBar

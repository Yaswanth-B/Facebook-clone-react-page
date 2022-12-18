import Nav from './Components/Nav'
import LeftBar from './Components/LeftBar'
import RightBar from './Components/RightBar'
import Footer from './Components/Footer'
import CenterBar from './Components/CentreBar'
import './index.css'

function App() {
	return (
		<>
			<Nav />
			<div className="container">
				<LeftBar />
				<CenterBar />
				<RightBar />
				
			</div>
			<Footer/>
		</>

	)
}

export default App;

// interal component dependencies
import { Nav, LeftBar, RightBar, Footer, CentreBar } from './components'

// style dependencies
import './index.css'

// top level component to compose the rest of the webpage
function App() {
	return (
		<>
			<Nav />
			<div className="container">
				<LeftBar />
				<CentreBar />
				<RightBar />
			</div>
			<Footer/>
		</>

	)
}

export default App;
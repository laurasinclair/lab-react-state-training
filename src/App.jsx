import './App.sass'
import LikeButton from './components/LikeButton'
import Counter from './components/Counter'
import ClickablePicture from './components/ClickablePicture'
import DiscoButton from './components/DiscoButton'
import Dice from './components/Dice'

function App() {
	return (
		<div className="App">
			<div>
				<DiscoButton />
			</div>
			<div>
				<LikeButton />
			</div>
			<div>
				<Counter />
			</div>
			<div>
				<ClickablePicture />
			</div>
			<div>
				<Dice />
			</div>
		</div>
	)
}
export default App

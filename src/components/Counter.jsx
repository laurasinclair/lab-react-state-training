import { useState } from 'react'
import './Counter.sass'

export default function Counter() {
	const [count, setCount] = useState(0)
	function increment() {
		setCount(count + 1)
	}
	function decrement() {
		return (count <= 0) ? setCount(count) : setCount(count - 1)
	}

	return (
		<>
			<button className="likebutton" onClick={decrement}>
				-
			</button>
			{count} 	
			<button className="likebutton" onClick={increment}>
				+
			</button>
		</>
	)
}

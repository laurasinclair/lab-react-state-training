import { useState } from 'react'
import './LikeButton.sass'

export default function LikeButton() {
	const [count, setCount] = useState(0)
	function increment() {
		setCount(count + 1)
	}

	return (
		<button className="likebutton" onClick={increment}>
			{count} Likes	
        </button>
	)
}

import { useState } from 'react'
const colorsArr = ["purple", "blue", "green", "yellow", "orange", "red"]

export default function DiscoButton() {
	const [count, setCount] = useState(0)
	const [colorBg, setColorBg] = useState(colorsArr[0])

	function increment() {
		setCount(count + 1)
	}
	const handleClick = () => {
		increment()

		setColorBg(colorsArr[Math.floor(Math.random() * colorsArr.length)])
	}

	return (
		<button style={{backgroundColor: colorBg}} className="discobutton" onClick={handleClick}>
			{count} Likes	
        </button>
	)
}

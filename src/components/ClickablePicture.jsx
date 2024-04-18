import { useState } from 'react'
import Image1 from '/image1.jpg'
import Image2 from '/image2.jpg'

export default function ClickablePicture() {
	const [image, toggleImage] = useState(Image1)

	const handleClick = () => {
		toggleImage(!image)
	}

	return (
		<>
			<img src={image ? Image1 : Image2} onClick={handleClick} alt="" />
		</>
	)
}

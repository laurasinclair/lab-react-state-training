import { useState } from 'react'
import DiceEmpty from '/src/assets/images/dice-empty.png'
import Dice1 from '/src/assets/images/dice1.png'
import Dice2 from '/src/assets/images/dice2.png'
import Dice3 from '/src/assets/images/dice3.png'
import Dice4 from '/src/assets/images/dice4.png'
import Dice5 from '/src/assets/images/dice5.png'
import Dice6 from '/src/assets/images/dice6.png'

const diceArr = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]

export default function ClickablePicture() {
	const [dice, shuffleDice] = useState(Dice3)

	const handleClick = () => {
		setTimeout(() => {
			shuffleDice(diceArr[Math.floor(Math.random() * diceArr.length)])
		}, 1000)

		shuffleDice(DiceEmpty)
	}

	return (
		<>
			<img src={dice} onClick={handleClick} alt="" />
		</>
	)
}

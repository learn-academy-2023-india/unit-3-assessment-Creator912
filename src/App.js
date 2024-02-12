import React, { useState } from "react"
import Card from "./components/Card"
import "./App.css"

const App = () => {
  const suit = ["❤️", "♦️", "♠️", "♣️"]
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]
  const [hand, setHand] = useState([])

  const drawCard = () => {
    // 1) 
      // const draw is my variable to my function const drawcard.
   
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]
    }`
    // 2)
      // .random gives me a floating number 
      // .floor rounds down the result
      // rank.length will give me random card from rank array
      // suit calls .length.random.floor same as previous just implements elements for card suit.
    if (hand.indexOf(draw) === -1) {
      // 3)
        // this is my conditional statement with my strict operator to check if the result of the indexOf method is equal to -1.
      setHand([...hand, draw])
      // 4) This is in cohition with my conditional creating a new array with my existing hand array and adding draw as a element at the end of my array.

    } else if (hand.length !== 52) {
      // 5)
       // this checks if the length of the hand array is not equal to 52.
      drawCard()
      // 6) This will draw another card
    } else {
      // 7) This condition renders when all my cards are dealt.
      alert("All cards have been dealt.")
    }
  }
  // No need to change anything ABOVE this line ^

  const shuffle = () => {
    setHand([])
  }
    
  return (
    <div>
    <h1>Draw a Card</h1>
    <button onClick={drawCard}>Click to Draw a Card</button>
    <button onClick={shuffle}> Return Cards and Shuffle Deck</button>
    <Card hand={hand} />
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './Components/SingleCard'

const cardImages = [
  {"src": "/img/chiefs.png", matched: false},
  {"src": "/img/cowboys.png", matched: false},
  {"src": "/img/eagles.png", matched: false},
  {"src": "/img/steelers.png", matched: false},
  {"src": "/img/patriots.png", matched: false},
  {"src": "/img/bills.png", matched: false}
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)



  // Shuffle cards Here, random id
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random()- 0.5)
      .map ((card) => ({...card, id: Math.random()}))

    setCards(shuffleCards)
    setTurns(0)
  }

//  Pick between two cards and setting choice selection
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // Compare if cards match or not
  useEffect(() => {
    if (choiceOne && choiceTwo) {

      if(choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
      
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  console.log(cards)

  // Reset choice & turn increases by one
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }


  return (
    <div className="App">
      <h1>Football Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.matched}/>
        ))}
      </div>
    </div>
  );
}

export default App
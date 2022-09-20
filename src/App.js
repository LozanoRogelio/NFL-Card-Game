import { useState } from 'react'
import './App.css'
import SingleCard from './Components/SingleCard'

const cardImages = [
  {"src": "/img/chiefs.png"},
  {"src": "/img/cowboys.png"},
  {"src": "/img/eagles.png"},
  {"src": "/img/steelers.png"},
  {"src": "/img/patriots.png"},
  {"src": "/img/bills.png"}
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  // Shuffle cards Here, random id
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random()- 0.5)
      .map ((card) => ({...card, id: Math.random()}))

    setCards(shuffleCards)
    setTurns(0)
  }

  console.log(cards, turns)


  return (
    <div className="App">
      <h1>Football Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard key={card.id} card={card}/>
        ))}
      </div>
    </div>
  );
}

export default App
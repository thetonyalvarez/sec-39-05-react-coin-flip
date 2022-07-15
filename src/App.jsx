import { useState } from 'react'
import logo from './logo.svg'
import Coin from './Coin'
import Counter from './Counter'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import './App.css'

let coin;


function App() {
  
  const flipCoin = () => {
    return Math.floor(Math.random() * 2) + 1
  }
  
  const [side, setSide] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [headCount, setHeadCount] = useState(0)
  const [tailCount, setTailCount] = useState(0)

  const handleFlip = () => {
    let flip = flipCoin()
    
    setTotalCount(totalCount + 1)

    if (flip == 1) {
      setHeadCount(headCount + 1)
    } else if (flip == 2) {
      setTailCount(tailCount + 1)
    }

    setSide(flip)

  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Let's Flip a Coin!</p>
      </header>
      <Container component="main" sx={{py: 4}}>
        <Coin sx={{p: 4}} side={side}/>
        <Button variant="outlined" onClick={handleFlip}>FLIP ME!</Button>
        <Counter total={totalCount} heads={headCount} tails={tailCount}/>
      </Container>
    </div>
  )
}

export default App
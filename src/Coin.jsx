import React, { useState } from 'react'
import Box from '@mui/material/Box'
import './Coin.css'

let coinImg;

const Coin = (props) => {
  const flip = Math.floor(Math.random() * 2)
  let side;
  if (flip == 0) {
    side = 'heads'
  } else if (flip == 1) {
    side = 'tails'
  }
  coinImg = `./src/${side}.png`

  return (
    <Box>
      <img className="CoinImg" src={coinImg} alt="{side}"/>
    </Box>
    )
}

export default Coin
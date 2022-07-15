import React, { useState } from 'react'
import Box from '@mui/material/Box'
import './Coin.css'


const Coin = (props) => {
  let side;
  let coinImg;

  if (props.side == 0) {
    return (
      <Box></Box>
    )
  }

  if (props.side == 1) {
    side = 'heads'
  } else if (props.side == 2) {
    side = 'tails'
  }
  coinImg = `./src/${side}.png`

  return (
    <Box
      sx={{p: 4}}>
      <img
        className="CoinImg"
        src={coinImg}
        alt={side}
        data-testid="coin-img"
      />
    </Box>
  )
}

export default Coin
import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

const Counter = (props) => {

  return (
    <Grid
      container
      justifyContent="center"
      spacing={ 2 }
      sx={{my: 4}}>

      <Grid item xs={12} sm={12} md={12} lg={3}>
        <Card sx={{p: 4}}>
          <Typography variant="subtitle2">Total Flips</Typography>
          <Typography variant="h3">{props.total}</Typography>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <Card sx={{p: 4}}>
            <Typography variant="subtitle2">Heads</Typography>
            <Typography variant="h3">{props.heads}</Typography>
          </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <Card sx={{p: 4}}>
            <Typography variant="subtitle2">Tails</Typography>
            <Typography variant="h3">{props.tails}</Typography>
          </Card>
      </Grid>
    </Grid>
  )
}

export default Counter
import { Container } from '@material-ui/core'
import React from 'react'
import { useStyle } from "./StyleHome/Stylehome"

function Home() {

  const classes = useStyle()

  return (
    <Container className={classes.body}>
      <div className={classes.nav}>
        <div className={classes.up}>
          <h3 className={classes.title}>Home</h3>
          <hr className={classes.hr}/>
        </div>
      </div>
    </Container>
  )
}

export default Home;
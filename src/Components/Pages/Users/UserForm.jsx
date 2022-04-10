import { Button, Container, Fab, Grid, Modal, TextField, Tooltip } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import React, { useState } from 'react'
import { useStyle } from './UsersStyle'



function UsersAdd() {

  const [open, setOpen] = useState(false)
  
  const [currency, setCurrency] = React.useState('Action');
  
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  
  const classes = useStyle()
  return (
    <>
    <Tooltip title="Add" aria-label='add' onClick={() => setOpen(true)}>
      <Fab color='primary' className={classes.fab}>
        <Add />
      </Fab>
    </Tooltip>
    <Modal open={open}>
      <Container className={classes.container}>
        <h3 className={classes.title}>Ajouter Des Livres</h3>
        <hr className={classes.hr}/>
        <div className={classes.Rows}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <TextField label="Nom" variant="outlined" className={classes.textTitre}/>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.gridC}>
              <TextField label="Prenom" variant="outlined" className={classes.textTitre}/>
            </Grid>
          </Grid>
        </div>
        <div className={classes.Rows}>
          <Grid container>
            <Grid item xs={12} sm={6}>
            <TextField label="Email" variant="outlined" className={classes.textTitre}/>
           </Grid>
           <Grid item xs={12} sm={6}>
              <TextField label="Password" variant="outlined" className={classes.textTitre}/>
            </Grid>
          </Grid>
        </div>
        <div className={classes.Rows}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <TextField label="Tel" variant="outlined" className={classes.textTitre}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.btns}>
                <Button variant='text' className={classes.btn}>Ajouter</Button>
                <Button variant='text' className={classes.btn} onClick={()=> setOpen(false)}>Cancel</Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Modal>
    </>
  )
}

export default UsersAdd
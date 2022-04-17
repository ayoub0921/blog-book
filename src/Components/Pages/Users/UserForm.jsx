import { Grid } from '@material-ui/core'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { useStyle } from './UsersStyle'
import * as Yup from 'yup';
import Textfield from '../books/TextfieldUi'
import { Button, Container, Modal } from '@mui/material'



function UserForm() {

  const [open, setOpen] = useState(false)
  const classes = useStyle()

  const INITIAL_FORM_STATE = {
    nom: "",
    prenom: "",
    email: "",
    password: "",
    tel: "",
  }

  const FORM_VALIDATION = Yup.object().shape({
    nom: Yup.string()
           .required('Obligatoire*'),
    prenom: Yup.string()
           .required('Obligatoire*'),
    email: Yup.string()
           .required('Obligatoire*')
           .email('Invalid email'),
    password: Yup.string()
           .required('Obligatoire*'),
    tel: Yup.string()
           .required('Obligatoire*').max(10,"Entrez juste 10 Nombres")


  })

  return (
    <>
    <Button variant='contained' onClick={() => setOpen(true)}> + Ajouter</Button>
    <Modal open={open}>
      <Container className={classes.containerForm}>
        <h3 className={classes.title}>Ajouter Des Livres</h3>
        <hr className={classes.hr}/>
        <Formik initialValues={{...INITIAL_FORM_STATE}} validationSchema={FORM_VALIDATION}>
          <Form sx={{ flexGrow: 1 }} className={classes.form}>
          <div className={classes.Rows}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Textfield  name="nom" label="Nom" variant="outlined" className={classes.textTitre}/>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.gridC}>
                <Textfield  name="prenom" label="Prenom" variant="outlined" className={classes.textTitre}/>
              </Grid>
            </Grid>
          </div>
          <div className={classes.Rows}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Textfield  name="email" label="Email" variant="outlined" className={classes.textTitre}/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Textfield  name="password" label="Password" variant="outlined" className={classes.textTitre}/>
              </Grid>
            </Grid>
          </div>
          <div className={classes.Rows}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Textfield  name="tel" label="Tel" variant="outlined" className={classes.textTitre}/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className={classes.btns}>
                  <Button variant='contained' type='submit' className={classes.btn}>Ajouter</Button>
                  <Button variant='contained' className={classes.btn} onClick={()=> setOpen(false)}>Cancel</Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </Form>
      </Formik>
      </Container>
    </Modal>
    </>
  )
}

export default UserForm
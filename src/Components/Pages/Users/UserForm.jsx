import { Grid } from '@material-ui/core'
import { Form, Formik } from 'formik'
import React from 'react'
import { useStyle } from './UsersStyle'
import * as Yup from 'yup';
import Textfield from '../books/TextfieldUi'
import { Typography } from '@mui/material'



function UserForm() {

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
           .required('Obligatoire*'),
    password: Yup.string()
           .required('Obligatoire*'),
    tel: Yup.string()
           .required('Obligatoire*')


  })

  return (
    <Formik initialValues={{...INITIAL_FORM_STATE}} validationSchema={FORM_VALIDATION}>
      <Form sx={{ flexGrow: 1 }} className={classes.form}>
        <div>
          <Typography className={classes.title} variant='h6'>
            Ajouter des utilisateurs
          </Typography>
          <span className={classes.line}></span>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Textfield  name="nom" label="Nom" />
          </Grid>
          <Grid item xs={6}>
            <Textfield   name="prenom" label='Prenom' />
          </Grid>
          <Grid item xs={6}>
            <Textfield   name="email" label='Email' type='email' />
          </Grid>
          <Grid item xs={6}>
            <Textfield   name="password" label='Password' />
          </Grid>
          <Grid item xs={6}>
            <Textfield  name="tel" label='Telephone' />
          </Grid>
          <Grid item xs={6}>
            <button type='submit' className={classes.btn}>Ajouter</button>
          </Grid> 
        </Grid>
      </Form>
    </Formik>
  )
}

export default UserForm
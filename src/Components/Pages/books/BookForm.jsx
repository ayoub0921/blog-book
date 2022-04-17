import React, {useState} from 'react'
import { useStyles } from './Style'
import {Typography, Grid} from '@material-ui/core'
import {Formik , Form} from 'formik'
import * as Yup from 'yup';
import Textfield from '../books/TextfieldUi'


const BookForm = ({onAddBook}) => {
  const classes = useStyles();



  // // handlChange inputs
  // const handlChange = (e) =>{
  //   e.preventDefault();
  //   setInputs({...inputs,[e.target.name]:e.target.value})
    

  // }

  // const handlSubmit = (e) =>{
  //   e.preventDefault();
  //   onAddBook(inputs);
  //   Toastify({
  //     duration: 2000,
  //     text: "votre livre est ajouter avec reussir",
  //     close: true,
  //     className: "info",
  //     gravity: "bottom",
  //     position: "center",
  //     style: {
  //       background: "linear-gradient(to right, #00b09b, #7af1e3)",
  //     }
  //   }).showToast();
  // }




  const INITIAL_FORM_STATE = {
    title: "",
    auteur: "",
    price: "",
    quantity: "",
    category: ""

  }

  const FORM_VALIDATION = Yup.object().shape({
    title: Yup.string()
           .required('Obligatoire*')
           .max(20, 'Doit contenir 20 caractères ou moins'),
    auteur: Yup.string()
           .required('Obligatoire*')
           .max(20, 'Doit contenir 20 caractères ou moins'),
    price: Yup.number()
           .required('Obligatoire*') 
           .typeError('pleas enter valid price')
           .min(1, 'Valeur minimale 1.'),
    quantity: Yup.number()
           .required('Obligatoire*') 
           .typeError('vous devez spécifier un nombre')
           .min(1, 'Valeur minimale 1.'),
    category: Yup.string()
           .required('Obligatoire*')
           .max(20, 'vous devez spécifier un nombre'),


  })

  
  return (
    <Formik
      initialValues={{...INITIAL_FORM_STATE}}
      validationSchema={FORM_VALIDATION}
    >
      <Form 
        sx={{ flexGrow: 1 }} className={classes.form}
      >
        <div className={classes.head}>
              <Typography className={classes.title} variant='h3'>
                  Ajouter des livres
              </Typography>
              <span className={classes.line}></span>
        </div>
        <Grid container spacing={2}>
            <Grid item xs={6}>
              <Textfield  name="title" label="Title" className={classes.textfield}/>
            </Grid>
            <Grid item xs={6}>
              <Textfield   name="auteur" label='Auteur' className={classes.textfield}/>
            </Grid>
            <Grid item xs={6}>
              <Textfield   name="price" label='Prix' type='number' className={classes.textfield}/>
            </Grid>
            <Grid item xs={6}>
              <Textfield   name="quantity" label='Quantity' type='number'  className={classes.textfield}/>
            </Grid>
            <Grid item xs={6}>
              <Textfield  name="category" label='Categorie' className={classes.textfield}/>
            </Grid>
            <Grid item xs={6}>
              <button type='submit' className={classes.btn}>Ajouter</button>
            </Grid> 
        </Grid>
        </Form>
    </Formik>
  )
}

export default BookForm;
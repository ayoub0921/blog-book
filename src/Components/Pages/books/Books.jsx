import React, {useState} from 'react'
import BookForm from '../books/BookForm'
import BookList from '../books/BookList'
import {Typography} from '@material-ui/core'
import uuid from 'react-uuid';
import Toastify from 'toastify-js'
import { useStyles } from './Style'

function Books() {
    const classes = useStyles();
    const [books,setBooks] = useState([
    {id:uuid(),title: 'antigone',category:"roman",auteur:"safrioui",price:"250",quantity:10},
    {id:uuid(),title: 'antigone',category:"roman",auteur:"safrioui",price:"250",quantity:10},
    {id:uuid(),title: 'antigone',category:"roman",auteur:"safrioui",price:"250",quantity:10},
    ])

    // ADD BOOK HANDLER

    const handelAddBook = (book) =>{
      const newBook = {...book,id:uuid()}
      setBooks([...books,newBook])
    }

    // DELET BOOK HANDLE
    const handlDeletBook = (id) =>{
      const new_books = books.filter(book=>book.id !== id)
      setBooks(new_books)
      Toastify({
        duration: 2000,
        text: "Un livre est supprimé avec succès",
        close: true,
        className: "info",
        gravity: "bottom",
        position: "center",
        style: {
          background: "linear-gradient(to right, #e84118, #ff7979)",
        }
      }).showToast();
    }

  return (
    <div style={{padding: "12px"}}>
      <div>
        <Typography className={classes.page} variant='h2'>les livres</Typography>
        <BookForm onAddBook={handelAddBook}/>
        <BookList books={books} onDeletBook={handlDeletBook}/>
      </div>
    </div>
  )
}

export default Books
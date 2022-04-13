import { Typography } from '@material-ui/core';
import React, { useState } from 'react'
import UserList from './UserList';
import { v4 as uuid } from 'uuid';
import Toastify from 'toastify-js';
import UserForm from './UserForm';
import { useStyle } from './UsersStyle';


function Users() {
  const classes = useStyle();

  const [users,setUsers] = useState([
    {id:uuid(),nom: 'ayoub',prenom:"ben",email:"ayoub@gmail.com",password:"abcd123456",tel:'0610203040'},
    {id:uuid(),nom: 'ayoub',prenom:"ben",email:"ayoub@gmail.com",password:"abcd123456",tel:'0610203040'},
    {id:uuid(),nom: 'ayoub',prenom:"ben",email:"ayoub@gmail.com",password:"abcd123456",tel:'0610203040'},
  ])

  // ADD BOOK HANDLER

  const handelAddBook = (user) =>{
    const newUser = {...user,id:uuid()}
    setUsers([...users,newUser])
  }

  // DELET BOOK HANDLE
  const handlDeletUser = (id) =>{
    const new_users = users.filter(user=>user.id !== id)
    setUsers(new_users)
    Toastify({
      duration: 2000,
      text: "livre est supprimer avec reussir",
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

    <div style={{padding: '20px'}}>
      <div>
        <Typography variant='h2' className={classes.page}>Les utilisateurs</Typography>
        <UserForm />
        <UserList users={users} onDeletUser={handlDeletUser} />
      </div>
    </div>
  )
}

export default Users;
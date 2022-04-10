import { Typography } from '@material-ui/core';
import React, { useState } from 'react'
import UserList from './UserList';
import { v4 as uuid } from 'uuid';
import Toastify from 'toastify-js';



function Users() {

  const [users,setUsers] = useState([
    {id:uuid(),nom: 'ayoub',prenom:"benyahia",email:"ayoub@gmail.com",password:"123456789", tel:'0611223344'},
    {id:uuid(),nom: 'ayoub',prenom:"guidi",email:"ayoub@gmail.com",password:"1234789", tel:'0613344'},
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
      text: "livre est supprimer avec Succées",
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
    <div style={{padding: '20px', backgroundColor: 'aqua'}}>
      <Typography variant='h2' style={{paddingBottom: '10px', textAlign: "center"}}>La liste des utilisateurs</Typography>
      <UserList users={users} onDeletUser={handlDeletUser} />
    </div>
  )
}

export default Users;
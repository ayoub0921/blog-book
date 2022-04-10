import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
import { useStyle } from './UsersStyle';
import Paper from '@mui/material/Paper';
import UserForm from './UserForm';




function UsersTable(props) {

  const {onDeletUser} =props
    const tableHead = [
        "ID",
        "Nom",
        "Prenom",
        "Email",
        "Password",
        "Tel",
        "Actions"
    ]

  const classes = useStyle()
  const {length: count} = props.users;


  return (
    <>
    {count === 0 ? <p className={classes.nothing}>Aucun livre dans le tableau</p> : <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHead.map((t,index)=>(
              <TableCell key={index}>{t}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.map((b) => (
            <TableRow key={b.id} >
              <TableCell component="th" scope="row">
                {b.id}
              </TableCell>
              <TableCell>{b.nom}</TableCell>
              <TableCell>{b.prenom}</TableCell>
              <TableCell>{b.email}</TableCell>
              <TableCell>{b.password}</TableCell>
              <TableCell>{b.tel}</TableCell>
              <TableCell>
                <BiEdit color="#fbc531" fontSize="20px" cursor="pointer"/>
                <AiFillDelete onClick={()=>onDeletUser(b.id)} className={classes.deletIcon}  color='#e84118' fontSize="20px" cursor="pointer"/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>}
    <UserForm /></>
  )
}

export default UsersTable;
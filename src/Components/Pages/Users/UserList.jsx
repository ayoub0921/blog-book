import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
import { useStyle } from './UsersStyle';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';




function UsersTable(props) {

  const {onDeletUser} =props
    const tableHead = [
        "ID",
        "Nom",
        "Prenom",
        "Email",
        "Password",
        "Telephone",
        "Actions"
    ]

  const classes = useStyle()
  const {length: count} = props.users;


  if(count === 0) 
        return <p className={classes.nothing}>Aucun utilisateur dans le tableau</p>
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <Typography className={classes.title} variant='h6'>
          liste des utilisateurs
        </Typography>
        <span className={classes.line}></span>
      </div>
      <p className={classes.nombre}>Il ya {count} {count>1 ? 'utilisateurs' : 'utilisateur'} dans le tableau</p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{backgroundColor:'#F6F6F6'}}>
            <TableRow>
              {tableHead.map((t,index)=>(
                <TableCell key={index}>{t}</TableCell>
              ))}
            </TableRow>
            </TableHead>
          <TableBody>
            {props.users.map((b) => (
              <TableRow key={b.id}>
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
    </div>
  )
}


export default UsersTable;
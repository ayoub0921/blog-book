import React from 'react';
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
import { useStyles } from './Style';
import { Typography,Table, TableContainer ,TableHead ,TableRow,TableCell, TableBody ,Paper} from '@material-ui/core';



const BookList = (props) => {
    const {onDeletBook} =props
    const tableHead = [
        "Id",
        "Titre",
        "Auteur",
        "Catégorie",
        "Prix(MAD)",
        "Quantity",
        "Actions"
    ]

    const classes = useStyles();
    const {length: count} = props.books;

    // message de tableu est vide
    if(count === 0) 
        return <p className={classes.nothing}>Aucun livre dans le tableau</p>
  return (
    <div className={classes.container}>
        <div className={classes.head}>
            <Typography className={classes.title} variant='h3'>
                liste de livres
            </Typography>
            <span className={classes.line}></span>
        </div>
        <p className={classes.nombre}>Il ya {count} livres dans le tableau</p>
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
                    {props.books.map((b) => (
                        <TableRow
                        key={b.id}
                        >
                        <TableCell component="th" scope="row">
                            {b.id}
                        </TableCell>
                        <TableCell>{b.title}</TableCell>
                        <TableCell>{b.auteur}</TableCell>
                        <TableCell>{b.category}</TableCell>
                        <TableCell>{b.price}</TableCell>
                        <TableCell>{b.quantity}</TableCell>
                        <TableCell>
                            <BiEdit color="#fbc531" fontSize="20px" cursor="pointer"/>
                            <AiFillDelete onClick={()=>onDeletBook(b.id)} className={classes.deletIcon}  color='#e84118' fontSize="20px" cursor="pointer"/>
                        </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default BookList
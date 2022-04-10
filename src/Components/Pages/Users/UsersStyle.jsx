import { makeStyles } from "@material-ui/core";


const blueColor =  '#192a56';
const greyColor = "#F6F6F6"

export const useStyle = makeStyles((theme) => (
  {
    container: {
      backgroundColor: greyColor,
      width: '100%',
      height: "100%",
      padding: '15px',
      marginBottom: '20px',
      borderRadius: '5px'
    },
    title: {
      fontFamily: 'arial',
      fontWeight: '700',
      fontSize: '17px',
      margin: '60px 0 5px 0',
    },
    hr: {
      width: '35px',
      height: '3px',
      borderRadius: '3px',
      backgroundColor: blueColor,
      border: 'none',
      marginBottom: '20px'
    },
    Rows: {
      display: 'flex',
      marginBottom: '20px',
    },
    textTitre: {
      width: '97%',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '5px'
      }
    },
    btns: {
      display: 'flex',
      width: '100%',
      height: '100%',
      [theme.breakpoints.down('xs')]: {
        marginTop: '20px'
      }
    },
    btn: {
      width: '50%',
      height: '100%',
      color: 'white',
      marginRight: '5px',
      backgroundColor: blueColor,
      '&:hover': {
        backgroundColor: blueColor
      }
    },
    delete: {
      color: 'red',
      cursor: 'pointer'
    },
    edit: {
      color: 'orange',
      cursor: 'pointer'
    },



    // ADD
    fab: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
    },
    // MODAL
    container: {
      width: '60%',
      height: '60%',
      backgroundColor: greyColor,
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      margin: 'auto',
      borderRadius: '10px',
      /*[theme.breakpoints.down('sm')]: {
        width: '70%',
        height: '45',
      },*/
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        height: '100%',
        borderRadius: '5px',
      }
    },
    nombre: {
      backgroundColor: greyColor,
      color: blueColor,
      textAlign: 'center',
      padding: "10px",
      fontWeight: "800",
      fontSize: "18px",
      boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    },

    nothing: {
      backgroundColor: "#e84118",
      color: '#fff',
      marginTop: '50px',
      textAlign: 'center',
      padding: "10px",
      fontWeight: "800",
      fontSize: "18px",
      boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    }






  }))
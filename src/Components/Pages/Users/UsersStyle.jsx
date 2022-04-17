import { makeStyles } from "@material-ui/core";


const blueColor =  '#192a56';
const greyColor = "#F6F6F6"

export const useStyle = makeStyles((theme)=>({
    container :{
        padding: "20px"
    },

    line: {
        backgroundColor:blueColor,
        display: "block",
        width: "40px",
        height: "4px",
        borderRadius: "9999px",
        marginBottom: '30px',
        marginTop: "8px"

    },

    form: {
        backgroundColor: greyColor,
        padding: "20px"
    },

    page: {
        textAlign: 'center',
        fontSize: '27px',
        textTransform: 'uppercase',
        fontWeight: '750',
        paddingBottom: "60px",
        color: blueColor,
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
    },
    // MODAL
    containerForm: {
        width: '90%',
        height: '65%',
        backgroundColor: greyColor,
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        margin: 'auto',
        borderRadius: '10px',
        [theme.breakpoints.down('sm')]: {
          width: '100%',
          height: '65%',
        },
        [theme.breakpoints.down('xs')]: {
          width: '100%',
          height: '100%',
          borderRadius: '5px',
        }
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
        width: '95%',
        [theme.breakpoints.down('sm')]: {
          marginBottom: '5px'
        }
      },
      btns: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '95%',
        height: '100%',
        [theme.breakpoints.down('xs')]: {
          flexDirection: 'column',
          marginTop: '20px',
        }
      },
      btn: {
        backgroundColor: "#3c40c6",
        padding: "10px",
        border: "none",
        color: '#fff',
        fontWeight: "700",
        cursor: 'pointer',
        height: "55px",
        width: "48%",
        borderRadius: "5px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        [theme.breakpoints.down("sm")]: {
            width: '48%'
        },
        [theme.breakpoints.down("xs")]: {
            width: '100%',
        }
      },


}))
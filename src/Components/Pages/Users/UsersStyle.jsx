import { makeStyles } from "@material-ui/core";


const blueColor =  '#192a56';
const greyColor = "#F6F6F6"

export const useStyle = makeStyles((theme)=>({
    container :{
        padding: "20px"
    },

    title: {
        fontSize: '18px',
        fontWeight: "bold",
        textTransform: "capitalize"

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

    btn: {
        backgroundColor: "#3c40c6",
        padding: "10px",
        border: "none",
        color: '#fff',
        fontWeight: "700",
        cursor: 'pointer',
        height: "55px",
        width: "50%",
        borderRadius: "5px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        [theme.breakpoints.down("sm")]: {
            width: '100%'
        }
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
        paddingBottom: "20px",
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
    }
}))
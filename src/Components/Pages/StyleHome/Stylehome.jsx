import { makeStyles } from "@material-ui/core";

const black = "#0e0e0e";
const grey = "#F6F6F6";
const green = "#A1F1B2";

export const useStyle = makeStyles((theme) => (
  {
    body: {
      margin: 0,
      padding: 0
    },
    nav:{
      backgroundColor: grey,
      width: "90%",
    },
    up: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(3)
    },
    title: {
      fontSize: "38px",
      fontWeight: 500,
    },
    hr: {
      height: '0.1px',
      width: "15%",
      backgroundColor: black,
      marginTop: theme.spacing(4),
    }

  }))
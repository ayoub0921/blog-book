import { makeStyles } from "@material-ui/core";

const black = "#0e0e0e";
const grey = "#F6F6F6";
const green = "#A1F1B2";

export const useStyle = makeStyles((theme) => (
  {
    // SIDEBAR
    containerSidebar: {
      backgroundColor: black,
      color: grey,
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      justifyContent: "space-between",
    },
    itemLogo: {
      paddingTop: theme.spacing(4),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    logo: {
      width: "60px",
      [theme.breakpoints.down("md")]: {
        width: "40px"
      },
      [theme.breakpoints.down("sm")]: {
        width: "32px"
      }
    },
    // MENU
    menu: {
      display: "flex",
      flexDirection: "column",
      height: "45%",
      justifyContent: "space-between"
    },
    link: {
      textDecoration: "none",
      color: grey
    },
    item: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "40px",
      cursor: "Pointer",
    },
    icon: {
      marginRight: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
        fontSize: "23px"
      },
      [theme.breakpoints.down("sm")]: {
        marginRight: theme.spacing(0)
      }
    },
    text: {
      fontWeight: 500,
      fontSize: "20px",
      [theme.breakpoints.down("xs")]: {
        display: "none"
      }
    },
    // HR
    hr: {
      height: "2px",
      border: "none",
      borderRadius: "10%",
      backgroundColor: grey,
    },
    // LOGOUT
    logout: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }
  }))
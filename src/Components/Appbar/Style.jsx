import { makeStyles } from "@material-ui/core";

const blue = "#192a56"
const grey = "#F6F6F6";
const greenColor = "#A1F1B2";

export const useStyle = makeStyles((theme) => (
  {
    // SIDEBAR
    containerSidebar: {
      backgroundColor: blue,
      color: grey,
      boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 3px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      height: "100vh",
      display: "flex",
      borderTopRightRadius: '7px',
      borderBottomRightRadius: '7px',
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px",
      position: "sticky",
      bottom: "0",
      top: "0",
    },

    itemLogo: {
      margin: "0 auto"
    },

    logo: {
      width: "60px",
      // [theme.breakpoints.down("md")]: {
      //   width: "40px"
      // },
      [theme.breakpoints.down("sm")]: {
        width: "32px",
        margin: '0 -3px'
      }
    },
    // MENU
    menu: {
      display: "flex",
      flexDirection: "column",
      height: "45%",
    },
    link: {
      textDecoration: "none",
      color: grey,
    },
    item: {
      display: "flex",
      alignItems: "center",
      margin: "auto",
      width: "80%",
      marginBottom: "30px",
      cursor: "Pointer",
      
    },
    line: {
      backgroundColor: greenColor,
      display: "block",
      position: "absolute",
      right: "0",
      width: "5px",
      height: "35px",
      [theme.breakpoints.down("sm")]: {
        width: '0',
        height: "0"
      }
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
      fontWeight: 300,
      fontSize: "18px",
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
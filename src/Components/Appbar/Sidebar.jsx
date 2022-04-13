import { Container, Typography } from "@material-ui/core";
import { Book, Dashboard, ExitToApp , People } from "@material-ui/icons";
import { useStyle } from "./Style";
import logo from "../../assets/images/logo2.png"
import { Link } from "react-router-dom";


const Sidebar = () => {

  const classes = useStyle()
  
  return(
    <Container className={classes.containerSidebar}>
      <div className={classes.itemLogo}>
        <img src={logo} className={classes.logo} alt=""bookLogo/>
      </div>
      <div className={classes.menu}>
        <Link to="/" className={classes.link}>
          <div className={classes.item}>
            <Book className={classes.icon}/>
            <Typography className={classes.text}>
              Livres
            </Typography>
            <span className={classes.line}></span>
          </div>
        </Link>
        <Link to="/dashboard" className={classes.link}>
          <div className={classes.item}>
            <Dashboard className={classes.icon} />
            <Typography className={classes.text}>
              Board
            </Typography>
            <span className={classes.line}></span>
          </div>
        </Link>
        <Link to="/users" className={classes.link}>
          <div className={classes.item}>
            <People className={classes.icon}/>
            <Typography className={classes.text}>
              Utilisateurs
            </Typography>
            <span className={classes.line}></span>
          </div>
        </Link>
      </div>
      <hr className={classes.hr}/>
      <Link to="/logout" className={classes.link}>
        <div className={classes.logout}>
          <ExitToApp className={classes.icon}/>
          <Typography className={classes.text}>
            Logout
          </Typography>
          <span className={classes.line}></span>
        </div>
      </Link>
    </Container>
  )
}



export default Sidebar;
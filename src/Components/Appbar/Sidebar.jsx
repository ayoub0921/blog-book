import { Container, Typography } from "@material-ui/core";
import { Book, Dashboard, ExitToApp, Menu, People } from "@material-ui/icons";
import { useStyle } from "../../Style";
import logo from "../../assets/images/logo2.png"
import { Link } from "react-router-dom";


const Sidebar = () => {

  const classes = useStyle()
  
  return(
    <Container className={classes.containerSidebar}>
      <div className={classes.itemLogo}>
        <img src={logo} className={classes.logo}/>
      </div>
      <div className={classes.menu}>
        <Link to="/" className={classes.link}>
          <div className={classes.item}>
            <Dashboard className={classes.icon}/>
            <Typography className={classes.text}>
              Home
            </Typography>
          </div>
        </Link>
        <Link to="/books" className={classes.link}>
          <div className={classes.item}>
            <Book className={classes.icon}/>
            <Typography className={classes.text}>
              Books
            </Typography>
          </div>
        </Link>
        <Link to="/users" className={classes.link}>
          <div className={classes.item}>
            <People className={classes.icon}/>
            <Typography className={classes.text}>
              Users
            </Typography>
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
        </div>
      </Link>
    </Container>
  )
}



export default Sidebar;
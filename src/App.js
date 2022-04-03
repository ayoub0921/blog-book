import { Grid } from "@material-ui/core";
import Sidebar from "./Components/Appbar/Sidebar";
import {useStyle} from './Style'
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home"
import Books from "./Components/Pages/Books";
import Users from "./Components/Pages/Users";
import Logout from "./Components/Pages/Logout";




function App() {
  const classes = useStyle();

  return (
    <div className="App">
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Sidebar/>
        </Grid>
        <Grid item sm={10} xs={10}>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/books" element={<Books />}/>
            <Route path="/users" element={<Users />}/>
            <Route path="/logout" element={<Logout />}/>
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

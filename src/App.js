import { Grid } from "@material-ui/core";
import Sidebar from "./Components/Appbar/Sidebar";
import "toastify-js/src/toastify.css"
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard"
import Books from "./Components/Pages/books/Books";
import Users from "./Components/Pages/Users";
import Logout from "./Components/Pages/Logout";




function App() {

  return (
    <div className="App">
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Sidebar/>
        </Grid>
        <Grid item sm={10} xs={10}>
          <Routes>
            <Route exact path="/dashboard" element={<Dashboard />}/>
            <Route path="/" element={<Books />}/>
            <Route path="/users" element={<Users />}/>
            <Route path="/logout" element={<Logout />}/>
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import Directors from "./Directors";
import Actors from "./Actors";
import NavBar from './NavBar';

function App() {
  return (
  <Router>
    <div className="App">
      {/*Render the NavBar component*/}
     <NavBar/>
      <Switch>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/directors">
          <Directors />
        </Route>
        <Route path="/actors">
          <Actors />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  )
  }

export default App;

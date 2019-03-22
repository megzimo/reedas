import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import "./App.css";

function App(){
    return (
      <div class="App">
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/menu" component={Menu} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/gallery" component={Gallery} />

            </Switch>
          </div>
        </Router>
      </div>
    );
  }

export default App;

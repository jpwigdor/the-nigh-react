import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Main from "./components/Main"
import Media from "./components/Media"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/Media" component={Media} />
      </Switch>
    </Router>
  );
}

export default App;

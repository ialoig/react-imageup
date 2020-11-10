import React from "react";
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/pages/homepage";
import Collection from "./components/pages/collection";
import Explore from "./components/pages/explore";

class App extends React.Component {

  render() {
    return (
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/collection" component={Collection} />
        <Route exact path="/explore" component={Explore} />
      </Router>
    )
  }
}

export default App;

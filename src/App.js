import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes"

import history from "./services/history";

class App extends React.Component {

  render() {
    return (
      <Router history={history}>
        <Routes />
      </Router>
    )
  }
}

export default App;

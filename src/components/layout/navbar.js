import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {

  render() {
    return (
      <div className="box-definition nav">
        <div className="nav-container">
          <Link to="/" className="logo"></Link>
          <div className="nav-desktop">
            <Link to="/collection" className="nav-link collection"></Link>
            <Link to="/explore" className="nav-link explore"></Link>
          </div>
          <div className="nav-user">
            <Link to="/" className="user"></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;

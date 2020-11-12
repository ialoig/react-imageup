import React from "react";
import { Link } from "react-router-dom";
import grid from "../../images/collection_icon.svg"
import explore from "../../images/explore_icon.svg"
import logo from "../../images/imageup_logo.svg"
import user from "../../images/user.svg"

class NavBar extends React.Component {

  render() {
    return (
      <div className="box-definition container-inner">
        <div className="header">
          <Link to="/" >
            <img src={logo} alt="collection"></img>
          </Link>
          
          <div className="menu">
            <Link to="/collection" className="menu-item">
              <img src={grid} alt="collection"></img>Collection
            </Link>
            <Link to="/explore" className="menu-item">
              <img src={explore} alt="explore"></img>Explore
            </Link>
          </div>

          <Link to="/">
              <img src={user} alt="user"></img>
          </Link>
        </div>
      </div>
    )
  }
}

export default NavBar;

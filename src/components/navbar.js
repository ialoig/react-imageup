import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/imageup_logo.svg"
import user from "../images/user.svg"

class NavBar extends React.Component {

  render() {
    return (
      <div className="flex items-center my-0 rounded-md bg-white shadow-md text-blue-500">
        <div className="flex items-center flex-wrap w-full h-12 mr-12 ml-12">
          
          <div className="flex flex-1">
            <Link to="/" >
              <img src={logo} alt="logo"></img>
            </Link>
          </div>

          <div className="flex flex-auto space-x-5 items-center">
              <Link to="/collection" className="p-3 leading-4 cursor-pointer no-underline rounded-lg hover:bg-gray-200 hover:text-blue-700">
                Collection
              </Link>
              <Link to="/explore" className="p-3 leading-4 cursor-pointer no-underline rounded-lg hover:bg-gray-200 hover:text-blue-700">
                Explore
              </Link>
          </div>
          <div className="">
            <Link to="/">
              <img src={user} alt="user"></img>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;

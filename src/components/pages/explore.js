import React from "react";
import Footer from "../layout/footer";
import NavBar from "../layout/navbar";

class Explore extends React.Component {

  render() {
    return (
      <div className="container">
        <NavBar/>
        <div>Explore</div>
        <Footer/>
      </div>
    )
  }
}

export default Explore;

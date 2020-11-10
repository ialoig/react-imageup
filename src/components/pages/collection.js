import React from "react";
import Footer from "../layout/footer";
import NavBar from "../layout/navbar";

class Collection extends React.Component {

  render() {
    return (
      <div className="container">
        <NavBar/>
        <div>Collection</div>
        <Footer/>
      </div>
    )
  }
}

export default Collection;

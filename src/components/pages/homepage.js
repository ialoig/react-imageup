import React from "react";
import Footer from "../layout/footer";
import NavBar from "../layout/navbar";
import Main from "../layout/main";

class HomePage extends React.Component {

  render() {
    return (
      <div className="container">
        <NavBar/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default HomePage;

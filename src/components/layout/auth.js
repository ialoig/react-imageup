import React from "react";
import PropTypes from "prop-types";

import NavBar from "./navbar";
import Footer from "./footer";

export default function AuthLayout({children}) {

    return (
        <div className="container">
            <NavBar/>
                {children}
            <Footer />
        </div>
    )
}


AuthLayout.propTypes = {
  children: PropTypes.element.isRequired
};

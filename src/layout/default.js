import React from "react";
import PropTypes from "prop-types";

import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function DefaultLayout({children}) {

    return (
        <div className="px-12">
            <NavBar/>
                {children}
            <Footer/>
        </div>
    )
}


DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};

import React from "react";
import PropTypes from "prop-types";

import NavBar from "../components/navbar";
import Footer from "../components/footer";


export default function AuthLayout({children}) {

    return (
        <div className="bg-gray-200 px-12">
            <NavBar/>
                {children}
            <Footer />
        </div>
    )
}


AuthLayout.propTypes = {
  children: PropTypes.element.isRequired
};

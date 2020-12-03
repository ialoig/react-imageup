import React from "react";

class Footer extends React.Component {

  render() {
    return (
      <div className="flex justify-center items-center rounded-md bg-white shadow-md text-blue-500 h-full">
        <div className="flex justify-center flex-col h-12 ">
          © 2020 - All Rights Reserved
        </div>
      </div>
    )
  }
}

export default Footer;
import React from "react";

import UploadForm from "./UploadForm"

class Main extends React.Component {

  render() {
    return (
      
        <div className="flex justify-center items-center content-center flex-col h-screen mr-12 ml-12">
          <div className="flex flex-col justify-center items-center rounded-md bg-white shadow-md text-blue-500 w-1/2 h-96">
            <UploadForm />
          </div>
        </div>
      
    )
  }
}

export default Main;
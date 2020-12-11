import React from "react";

import UploadForm from "./UploadForm"

class Main extends React.Component {

  render() {
    return (
        <div className="flex justify-center items-center content-center flex-col h-screen">
            <UploadForm />
        </div>
      
    )
  }
}

export default Main;
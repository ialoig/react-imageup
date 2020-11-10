import React from "react";

class Main extends React.Component {

  render() {
    return (
      <div className="main">
        <div className="box-definition drag-drop-area">
          <div className="upload-area"></div>
          <div className="message-area">
            <h2>Upload your first image!</h2>
            <p>Drag and Drop your files and get your collections</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
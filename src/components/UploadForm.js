import React from "react";

import icon from "../images/corner-left-up.svg"

export default class UploadForm extends React.Component {
    render() {
        return (
            <>
                <label for="upload-image" className="flex items-center justify-center flex-col">
                  <img src={icon} alt="upload"></img>
                  <p className="font-semibold text-xl">Click here to upload your images!</p>
                  <input type="file" accept="image/*" id="upload-image" className="hidden"></input>
                </label>
            </>
        )
    }
}

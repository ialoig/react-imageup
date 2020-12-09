import React, { useState } from "react";

import icon from "../images/corner-left-up.svg"
import ImageGrid from "./ImageGrid";

const UploadForm = () => {

    const [file, setFile] = useState({
        data: null,
        preview: ""
    });
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const onChange = (e) => {
        let selectedFile = e.target.files[0];
        console.log("selectedFile:" +selectedFile)
        if (selectedFile && !types.includes(selectedFile.type)) {
            console.log("Not an image file: " +selectedFile.name)
            setError("Not an image file");
            setFile({
                data: null,
                preview: ""
            });
        } else {
            console.log("Yes is an image: " +selectedFile.name)
            setError("");
            setFile({
                data: selectedFile,
                preview: URL.createObjectURL(selectedFile)
            });
        }
    }

    return (
        <>
            <div className="">
                { error && <div className="error">{ error }</div>}
                { file.data && <ImageGrid image={file}/> }
                { !file.data && <label htmlFor="upload-image" className="flex items-center justify-center flex-col">
                    <img src={icon} alt="upload"></img>
                    <p className="font-semibold text-xl">Click here to upload your images!</p>
                    <input type="file" accept="image/*" id="upload-image" className="hidden" onChange={onChange} />
                </label>
                }
            </div>
        </>
    )
};

export default UploadForm;
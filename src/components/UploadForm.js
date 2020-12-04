import React, { useState } from "react";
import axios from "axios";
import history from "../services/history";

import icon from "../images/corner-left-up.svg"

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const onChange = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && !types.includes(selectedFile.type)) {
            console.log("Not an image file: " +selectedFile.name)
            setError("Not an image file");
            setFile(null)
        } else {
            console.log("Yes is an image!" +selectedFile.name)
            setError("");
            setFile(selectedFile);
            uploadFile(file);
        }
    } 

    const uploadFile = async ( file ) => {
        console.log("file name:" +file.name)
        console.log("file type:" +file.type)
        const newImage = {
            name: file.name,
            file: file
        }

        const res = await axios
            .post("/new", newImage)
            .then(() => history.push("/explore")) //redirect to explore
            .catch(err => console.log("error while uploading new image: " +err)
            );
    }
    return (
        <>
            <div className="">
                { error && <div className="error">{ error }</div>}
                { file && <div>{ file.name }</div> }
                {!file && <label htmlFor="upload-image" className="flex items-center justify-center flex-col">
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
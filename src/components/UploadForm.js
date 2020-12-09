import React, { useState, useEffect } from "react";
import {useDropzone} from "react-dropzone";
import axios from "axios";

import history from "../services/history";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
    const [files, setFiles] = useState([]);
    const [progress, setProgress] = useState(0);

    const {getRootProps, getInputProps} = useDropzone({
      accept: 'image/*',
      onDrop: (acceptedFiles) => {
        setFiles(acceptedFiles.map( (file) => ({
          name: file.name,
          data: file,
          preview: URL.createObjectURL(file)
        })))
        //uploadFiles(files)
      }
    });
    

    const handleUpload =  () => {
      console.log("invoking upload post")
      files.forEach(async(file) => {
        if (file.data) {
          console.log("uploading file name=" +file.name+ ", data=" +file.data);
          const formData = new FormData();
          formData.append("name", file.name);
          formData.append("file", file.data);
          await axios({
            baseURL: "http://localhost:5000/api/image",
            url: '/new',
            method: "POST",
            data: formData,
            onUploadProgress: (progressEvent) => {
              const { loaded, total } = progressEvent;
              const percentageProgress = Math.floor((loaded/total) * 100);
              console.log("progress=" +percentageProgress);
              setProgress(percentageProgress);
            }
          })
          .then(() => history.push("/explore")) //redirect to explore
          .catch(err => console.log("error while uploading new image: " +err));
        }
      });
    }

    const thumbs = files.map(file => (
      <div key={file.name} className="relative">
        { progress >0 && <ProgressBar key={file.name} percentage={progress}/>}
        <img src={file.preview} className="pb-6 relative" alt=""></img>
      </div>
    ));
  
    useEffect(() => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <>
            { files.length === 0 &&
            <div className="relative" {...getRootProps()}>
                <input {...getInputProps()}></input>
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            }
            { files.length >0 && progress === 0 &&
              <button className="bg-blue-400 text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded hover:shadow-sm outline-none focus:outline-none mr-1 mb-1"
                onClick={handleUpload}>
                  Upload
              </button>
            }
            <div className="grid grid-cols-5 gap-x-2 mt-4 mx-auto items-stretch">
              {thumbs}
            </div>
        </>
    )
};

export default UploadForm;
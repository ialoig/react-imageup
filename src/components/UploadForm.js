import React, { useState, useEffect } from "react";
import {useDropzone} from "react-dropzone";
import axios from "axios";

import history from "../services/history";
import UploadGrid from "./UploadGrid";

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
  
    useEffect(() => () => {
    	// Make sure to revoke the data uris to avoid memory leaks
      	files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <>
			{ files.length === 0 &&
			<div className="flex flex-col justify-center items-center rounded-md bg-white text-blue-500 w-1/2 h-96">
				<div className="relative" {...getRootProps()}>
					<input {...getInputProps()}></input>
					<p>Drag 'n' drop some files here, or click to select files</p>
				</div>
			</div>
            }
			{ files.length >0 && progress === 0 &&
			<div className="flex flex-col justify-center items-center w-1/2 h-96">
              	<button className="bg-blue-400 text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded hover:shadow-sm outline-none focus:outline-none mt-4"
                	onClick={handleUpload}>
                  	Upload
              	</button>
				<UploadGrid files={files} uploadProgress={progress} />
			</div>
            }
        </>
    )
};

export default UploadForm;
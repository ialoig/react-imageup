import React from "react";
import axios from "axios";
import history from "../services/history";

const ImageGrid = ({image}) => {

    const handleUpload = async (e) => {
        e.preventDefault();
        console.log("handleUpload: file name:" +image.data.name)
        console.log("handleUpload: file:" +image.data)

        const formData = new FormData();
        formData.append("name", image.data.name);
        formData.append("file", image.data);

        const res = await axios
            .post("http://localhost:5000/api/image/new", formData)
            .then(() => history.push("/explore")) //redirect to explore
            .catch(err => console.log("error while uploading new image: " +err));
    }

    return (
        <div>
            <div className="font-semibold text-xl">{image.data.name}</div>
            {image.preview && <img src={image.preview} alt=""></img>}
            <div>
                <button onClick={handleUpload} className="px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700">Upload</button>
            </div>
        </div>
    )

}

export default ImageGrid;
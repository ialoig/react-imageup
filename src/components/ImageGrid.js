import React, { useState, useEffect }  from "react";

const ImageGrid = ({data}) => {

    const [image, setImage] = useState({
        name: "",
        base64: ""
    });

    const convertToBase64 = (image) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(image.file.Data.data));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        var arrBuffer = window.btoa(binary);

        var base64Flag = "data:" + image.file.ContentType+";base64,";
        var imgStr = base64Flag + arrBuffer;

        console.log("converting to Base64 ...");
        return imgStr;
    }

    useEffect( () => {
        setImage({
            name: data.name,
            base64: convertToBase64(data)
        })
    }, [data.name, data]);


    return (
        <figure className="mb-4">
            <img src={image.base64} alt={image.name} className="rounded w-full"></img>
        </figure>
    )

}

export default ImageGrid;
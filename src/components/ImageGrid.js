import React, { useState, useEffect }  from "react";

const ImageGrid = ({data}) => {

    const [images, setImages] = useState([{
        name: "",
        base64: ""
    }]);

    const convertToBase64 = (image) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(image.file.Data.data));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        var arrBuffer = window.btoa(binary);

        var base64Flag = "data:" + image.file.ContentType+";base64,";
        var imgStr = base64Flag + arrBuffer;

        console.log("converting to Base64 ["+image.name+"]");
        return imgStr;
    }

    useEffect( () => {
        console.log("data="+data.length);
        data.map(image => {
            const localImage = {
                name: image.name,
                base64: convertToBase64(image)
            }
            return setImages(images => [...images, localImage]);
        });
    }, [data]);


    return (
        <>
        { images.length>0 &&
            <div className="m-12 leading-none" style={{"columnCount": "3"}}>
            { images.map(image => (
                <figure key={image.name} className="mb-4">
                    <img key={image.name} src={image.base64} alt={image.name} className="rounded w-full"></img>
                </figure>
                ))
            }
            </div>
        }
        </>
    )

}

export default ImageGrid;
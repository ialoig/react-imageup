import React from "react";

const ImageGrid = ({image}) => {

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

    const style_tall = "gridRow: auto / span 2";
    const style_wide = "gridColumn: auto / span 2";

    const styles = [style_tall, style_wide];

    const randomlyStyle = styles[Math.floor(Math.random() * styles.length)];


    return (
        <figure className="" style={{randomlyStyle}}>
            <img src={convertToBase64(image)} alt={image.name} className="w-full"></img>
            <figcaption>{image.name}</figcaption>
        </figure>
    )

}

export default ImageGrid;
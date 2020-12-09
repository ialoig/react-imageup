import React from "react";

const ImageGrid = ({images}) => {

    const a = Object.keys(images).forEach(image => {
        console.log("["+image._id+"] name=" +image.name);
    })
    return (
        <div className="font-semibold text-xl">
            Images found:
            <div>
                {a}
            </div>
        </div>
    )

}

export default ImageGrid;
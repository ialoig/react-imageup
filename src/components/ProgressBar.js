import React from "react";


const ProgressBar = ({percentage}) => {

    return(
        <div className="h-2 mt-1 rounded-sm bg-blue-200 ">
            <div style={{ width: percentage+"%" }} className="whitespace-nowrap bg-blue-500"></div>
        </div>
    )
}

export default ProgressBar;
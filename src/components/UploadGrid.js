import React from "react";

import ProgressBar from "./ProgressBar";

const UploadGrid = ({files, uploadProgress}) => {

    const thumbs = files.map(file => (
		<div key={file.name} className="mb-2">
        	<img src={file.preview} className="rounded object-cover h-20 w-20" alt={file.name}></img>
        	{ uploadProgress >0 && <ProgressBar key={file.name} percentage={uploadProgress}/>}
      	</div>
    ));

    return(
		<div className="grid grid-cols-8 grid-flow-row gap-x-2 mt-4 mx-2">
            {thumbs}
        </div>
    )
}

export default UploadGrid
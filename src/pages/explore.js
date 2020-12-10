import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageGrid from "../components/ImageGrid";


const Explore = () => {

  	const [images, setImages] = useState([]);

	const getImages = async() => {
		await axios({
			baseURL: "http://localhost:5000/api/image",
			url: '/images',
			method: "GET"
		})
		.then( response => {
			setImages(response.data);
		})
		.catch(err => console.log("error while getting images: " +err));
	};

  	useEffect( () => {
		getImages();
	}, []);

	return (
    	<>
			{ (images.length === 0 || !images) && <h1>No images found ...</h1>}
			{ images.length>0 && 
				<div className="grid grid-flow-row-dense m-12 gap-4" style={{"gridTemplateColumns": "repeat(3,1fr)"}}>
					{images.map(image => (
						<ImageGrid key={image._id} image={image} />
					))}
				</div>
			}
      	</>
    )
}

export default Explore;

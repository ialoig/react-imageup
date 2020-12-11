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
			console.log("getting images...:" +response.data.length)
			setImages(response.data);
		})
		.catch(err => console.log("error while getting images: " +err));
	};

  	useEffect( () => {
		getImages();
	}, []);

	return (
    	<div className="overflow-auto overflow-x-hidden">
			{ (images.length === 0 || !images) && <h1>No images found ...</h1>}
			{ images.length>0 &&
				<ImageGrid data={images} />
			}
      	</div>
    )
}

export default Explore;

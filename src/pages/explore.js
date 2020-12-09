import React from "react";
import axios from "axios";
import ImageGrid from "../components/ImageGrid";
class Explore extends React.Component {

  constructor() {
    super();
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    axios({
      baseURL: "http://localhost:5000/api/image",
      url: '/images',
      method: "GET"
    })
    .then(results => {
      console.log("res="+results);
      this.setState({images: results})
    })
    .catch(err => console.log("error while getting images: " +err));
  }

  render() {
    return (
      <>
        <div>Explore</div>
        <div>
          <ImageGrid images={this.state.images} />
        </div>
      </>
    )
  }
}

export default Explore;

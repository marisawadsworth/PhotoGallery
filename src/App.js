import React from "react";
import './App.css';
import Titles from "./components/Titles";
import Search from "./components/Search";



// API Keys
const API_KEY_UNSPLASH = "55c988ed892700787ddc70e38721e2c423b3df83bbf5a01c83b4bd64fbc49def";
const API_KEY_PIXABAY = "14068965-be78c651b596996e93d527d27";
// const API_KEY_IMGUR = "";


class App extends React.Component {
  state = {
    images: [],
  }

fetchunsplashPhotos = async () => {
  // let value = ("dogs");
  let res = await fetch(`https://api.unsplash.com/search/photos?page=1&query=dogs&client_id=${API_KEY_UNSPLASH}`);
  res = await res.json();
  console.log(res)
  this.setState({
      images: res.results.map(i => i.urls.full)
  }); 
};

fetchpixabayPhotos = async () => {
  let res = await fetch(`https://pixabay.com/api/?key=${API_KEY_PIXABAY}&q=roses&image_type=photo`);
  res = await res.json();
  console.log(res)
  this.setState({
    // images: res.hits(i => i.hits)
    images: (res.hits)
  }); 
};

render() {
  return (
    <div className="App">
      <Titles />
      <Search fetchunsplashPhotos={this.fetchunsplashPhotos}/>
        <div className="button">
            <button onClick={this.fetchunsplashPhotos}>Unsplash</button>
            <button onClick={this.fetchpixabayPhotos}>Pixabay</button>
            <button>apiDoc</button>
          </div>
        <div>
          <h1>Images</h1>
        </div><div>
          {this.state.images.map((url, idx) => <img className="UnsplashImages" key={idx} src={url} alt="searched item"/>)}
      </div>
      </div>
    );
  }
};

export default App;

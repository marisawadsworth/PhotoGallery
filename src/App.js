import React from "react";
import './App.css';
import Titles from "./components/Titles";
import Search from "./components/Search";


// API Keys
const API_KEY_UNSPLASH = "55c988ed892700787ddc70e38721e2c423b3df83bbf5a01c83b4bd64fbc49def";
const API_KEY_PIXABAY = "14068965-be78c651b596996e93d527d27";


class App extends React.Component {
  state = {
    searchText: '',
    images: []
  }
  

// Unsplash
fetchunsplashPhotos = async (e) => { 
  e.preventDefault();
  let res = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${this.state.searchText}&client_id=${API_KEY_UNSPLASH}`);
  res = await res.json();
  //console.log(res)
  this.setState({
    images: res.results.map(i => i.urls.full)
  }); 
};

// Pixabay
fetchpixabayPhotos = async (e) => { 
  e.preventDefault();
  let res = await fetch(`https://pixabay.com/api/?key=${API_KEY_PIXABAY}&q=${this.state.searchText}&image_type=photo`);
  res = await res.json();
  // console.log(res)
  this.setState({
    images: res.hits
  }); 
};


getSearchResults = (e) => {
  //console.log(e.target.value)
  this.setState({searchText : e.target.value})

  console.log(this.state)
}


render() {
  return (
    <div className="App">
      <Titles />
      <Search updateText={this.getSearchResults} />
        <div className="button">
            <button onClick={this.fetchunsplashPhotos}>Unsplash</button>
            <button onClick={this.fetchpixabayPhotos}>Pixabay</button>
          </div>
        <div>
          <h1>Images</h1>
        </div>
          {this.state.images.map((url, idx) => {

            return (typeof(url) === "string" ? 
            <img className="Images" key={idx} src={url} alt="searched item"/> : 
            <img className="Images" key={idx} src={url["largeImageURL"]} alt="searched item"/>
            )
          })}
      </div>
    );
  }
};


export default App;
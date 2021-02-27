import React, { Component } from "react";
import "../App.css";

class Home extends Component {
  state = {
    artists: [],
  };

  componentDidMount() {
    fetch(`http://localhost:3000/artists`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ artists: data });
        console.log(this.state);
      });
  }

  generateArtists = () => {
    return this.state.artists.map((artist) => {
      return (
        <div className="card">
          <div className="cardContainer">
            <ul>
              <h2>{artist.name}</h2>
              <p>Type: {artist.artist_type}</p>
              <p>Price per Event: ${artist.price}</p>
            </ul>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h1 className="title">Book Your Next Beat</h1>
        {this.generateArtists()}
      </div>
    );
  }
}

export default Home;

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
        <article className="card">
          <h1>{artist.name}</h1>
          <p>
            <b>Type:</b> {artist.artist_type}
          </p>
          <p>
            <b>Genre:</b> {artist.genre}
          </p>
          <p>
            <b>Price per Event:</b> ${artist.price}
          </p>
        </article>
      );
    });
  };

  render() {
    return (
      <div>
        <h1 className="title">Book Your Next Beat</h1>
        <div className="centered">
          <section className="cards">{this.generateArtists()}</section>
        </div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import "../App.css";
import Artist from "./Artist";
import { useHistory } from "react-router-dom";

class Home extends Component {
  state = {
    artists: [],
    bookings: [],
    selected: {},
  };

  componentDidMount() {
    fetch(`http://localhost:3000/artists`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ artists: data });
        console.log(this.state);
      });
  }

  findArtist = () => {
    console.log(this.state.artists[0]);
    // <Redirect to="/artist" />;
  };

  generateArtists = () => {
    return this.state.artists.map((artist) => {
      return (
        <article onClick={this.findArtist} className="card">
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

  // Home() {
  //   let history = useHistory();
  //   const redirect = () => {
  //     history.push("/artist");
  //   };
  // }

  render() {
    return (
      <div>
        <h1 className="title">Book Your Next Beat</h1>
        <div className="centered">
          <section className="cards">{this.generateArtists()}</section>
        </div>
        <div>{<Artist artists={this.state.artists} />}</div>
      </div>
    );
  }
}

export default Home;

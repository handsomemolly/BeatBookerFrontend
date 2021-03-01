import React, { Component } from "react";
import "../App.css";
import Artist from "./Artist";
import Booking from "./Booking";
import { Redirect } from "react-router-dom";

class Home extends Component {
  state = {
    artists: [],
    bookings: [],
    selected: {},
    redirect: null,
  };

  componentDidMount() {
    fetch(`http://localhost:3000/artists`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ artists: data });
        console.log(this.state);
      });
  }

  generateOneArtist = () => {
    fetch(`http://localhost:3000/artists/29`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ selected: data });
        console.log(this.state.selected);
      });
  };

  generateArtists = () => {
    return this.state.artists.map((artist) => {
      return (
        <article onClick={this.generateOneArtist} className="card">
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
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div>
        <h1 className="title">Book Your Next Beat</h1>
        <div className="centered">
          <section className="cards">{this.generateArtists()}</section>
        </div>
        <div>{<Artist selected={this.state.selected} />}</div>
        <div>{<Booking bookings={this.state.bookings} />}</div>
      </div>
    );
  }
}

export default Home;

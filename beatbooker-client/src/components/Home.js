import React, { Component } from "react";
import "../App.css";
import Artist from "./Artist";
import Booking from "./Booking";
import { Redirect } from "react-router-dom";

class Home extends Component {
  state = {
    artists: [],
    // bookings: [],
    selected: {},
    display: true,
  };

  componentDidMount() {
    fetch(`http://localhost:3000/artists`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ artists: data });
        console.log(this.state);
      });
  }

  generateOneArtist = (e) => {
    let artistId = e.target.closest("div").id;
    fetch(`http://localhost:3000/artists/${artistId}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ selected: data, display: false });
        console.log(this.state.selected);
      });
    // this.props.history.push("/artist");
  };

  generateArtists = () => {
    return this.state.artists.map((artist) => {
      return (
        <div id={artist.id} onClick={(e) => this.generateOneArtist(e)}>
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
        </div>
      );
    });
  };

  handleBack = () => {
    this.setState({ selected: {}, display: true });
  };

  //   createBooking = () => {
  //     let newBooking = {
  //       event_date: "",
  //       event_type: "",
  //       number_of_attendees: 0,
  //       user_id: this.props.user.id,
  //       artist_id: 29,
  //     };
  //     fetch(`http://localhost:3000/bookings`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newBooking),
  //     })
  //       .then((res) => res.json())
  //       .then((book) => {
  //         console.log(book);
  //       });
  //   };

  render() {
    return (
      <div>
        <h1 className="title">Book Your Next Beat</h1>
        <div className="centered">
          <section className="cards">
            {this.state.display ? this.generateArtists() : null}
          </section>
        </div>
        <div>
          {!this.state.display ? (
            <Artist
              selected={this.state.selected}
              handleBack={this.handleBack}
            />
          ) : null}
        </div>
        {/* <div>{<Booking bookings={this.state.bookings} />}</div> */}
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import "../App.css";
import Artist from "./Artist";
import Booking from "./Booking";
import Reivew from "./Review";
import { Redirect } from "react-router-dom";

class Home extends Component {
  state = {
    artists: [],
    // bookings: [],
    selected: {},
    display: true,
    bookingDisplay: true,
    reviewDisplay: true,
    prices: [],
  };

  componentDidMount() {
    fetch(`http://localhost:3000/artists`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ artists: data });
        console.log(this.state);
        data.map((artist) => {
          this.setState({ prices: [...this.state.prices, artist.price] });
        });
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
            <p>
              <b>Number of Reviews: </b>
              {artist.reviews.length}
            </p>
          </article>
          <div class="muzieknootjes">
            <div class="noot-1">&#9835; &#9833;</div>
            <div class="noot-2">&#9833;</div>
            <div class="noot-3">&#9839; &#9834;</div>
            <div class="noot-4">&#9834;</div>
          </div>
        </div>
      );
    });
  };

  sortByPriceDesc = () => {
    const sorted = [...this.state.artists].sort((a, b) => b.price - a.price);
    this.setState({ artists: sorted });
  };

  sortByPriceAsc = () => {
    const sorted = [...this.state.artists].sort((a, b) => a.price - b.price);
    this.setState({ artists: sorted });
  };

  sortByMostReviewed = () => {
    const sorted = [...this.state.artists].sort(
      (a, b) => b.reviews.length - a.reviews.length
    );
    this.setState({ artists: sorted });
  };

  handleBack = () => {
    this.setState({ selected: {}, display: true });
  };

  toggleBooking = () => {
    this.setState({ bookingDisplay: !this.state.bookingDisplay });
  };

  toggleReview = () => {
    this.setState({ reviewDisplay: !this.state.reviewDisplay });
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
          <div className="buttons">
            <button className="sortByPrice" onClick={this.sortByPriceDesc}>
              Price: High to Low
            </button>
            <br></br>
            <button className="sortByPrice" onClick={this.sortByPriceAsc}>
              Price: Low to High
            </button>
            <br></br>
            <button className="sortByPrice" onClick={this.sortByMostReviewed}>
              Most Reviewed
            </button>
          </div>
          <section className="cards">
            {this.state.display ? this.generateArtists() : null}
          </section>
        </div>
        <div>
          {!this.state.display ? (
            <Artist
              selected={this.state.selected}
              handleBack={this.handleBack}
              artists={this.state.artists}
              user={this.props.user}
              bookingDisplay={this.state.bookingDisplay}
              toggleBooking={this.toggleBooking}
              reviewDisplay={this.state.reviewDisplay}
              toggleReview={this.toggleReview}
            />
          ) : null}
        </div>
        {/* <div>{<Booking selected={this.state.selected} />}</div> */}
      </div>
    );
  }
}

export default Home;

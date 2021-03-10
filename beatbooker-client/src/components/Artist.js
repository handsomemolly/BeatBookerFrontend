import { render } from "@testing-library/react";
import React, { Component } from "react";
import ReactPlayer from "react-player";
import "../App.css";
import Booking from "./Booking";
import Review from "./Review";

const youtubeAPI = "http://www.youtube.com/embed/";

class Artist extends Component {
  state = {
    bookings: [],
  };

  //   generateArtistInfo = () => {
  //     return this.props.selected.map((artist) => {
  //       return (
  //         <article className="artist-page">
  //           <h1>{artist.name}</h1>
  //           <p>Bio: {artist.bio}</p>
  //           <p>{artist.video_url}</p>
  //         </article>
  //       );
  //     });
  //   };
  render() {
    return (
      <div>
        <div className="container center">
          <div className="card">
            <h2>Featured</h2>
            <hr />
            <h1>{this.props.selected.name}</h1>
            <p>
              <b>Bio:</b> {this.props.selected.bio}
            </p>
            <p>
              <b>Genre:</b> {this.props.selected.genre}
            </p>
            <p>
              <b>Price per Event:</b> ${this.props.selected.price}
            </p>
            <div className="video">
              {/* <ReactPlayer url={this.props.selected.video_url} /> */}
              <iframe
                width="75%"
                height="500"
                src={youtubeAPI + `${this.props.selected.video_url}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <Review
                user={this.props.user}
                selected={this.props.selected}
                reviewDisplay={this.props.reviewDisplay}
              />
            </div>
            <div>
              <Booking
                bookings={this.state.bookings}
                selected={this.props.selected}
                artists={this.props.artists}
                user={this.props.user}
                bookingDisplay={this.props.bookingDisplay}
              />
            </div>
            <br></br>
            <button className="backToArtists" onClick={this.props.handleBack}>
              Back to All Artists
            </button>
            <button
              onClick={this.props.toggleBooking}
              className="backToArtists"
            >
              Create Booking Request
            </button>
            <button onClick={this.props.toggleReview} className="backToArtists">
              Write a Review
            </button>
          </div>
          {/* <div>
            <Booking
              bookings={this.state.bookings}
              selected={this.props.selected}
              artists={this.props.artists}
              user={this.props.user}
              bookingDisplay={this.props.bookingDisplay}
            />
          </div> */}
        </div>
      </div>
    );
  }
}

export default Artist;

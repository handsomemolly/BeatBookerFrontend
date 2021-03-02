import { render } from "@testing-library/react";
import React, { Component } from "react";
import ReactPlayer from "react-player";
import "../App.css";
import Booking from "./Booking";

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
        <h1>Artist Page</h1>
        <section>
          <article className="artist-page">
            <h1>{this.props.selected.name}</h1>
            <p>Bio: {this.props.selected.bio}</p>
            <ReactPlayer url={this.props.selected.video_url} />
            <button onClick={this.props.handleBack}>Back to All Artists</button>
          </article>
        </section>
        <div>
          {
            <Booking
              bookings={this.state.bookings}
              selected={this.props.selected}
              artists={this.props.artists}
            />
          }
        </div>
      </div>
    );
  }
}

export default Artist;

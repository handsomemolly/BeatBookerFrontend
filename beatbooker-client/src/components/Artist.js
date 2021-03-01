import { render } from "@testing-library/react";
import React, { Component } from "react";
import "../App.css";

class Artist extends Component {
  generateArtistInfo = () => {
    return this.props.artists.map((artist) => {
      return (
        <article className="artist-page">
          <h1>{artist.name}</h1>
          <p>Bio: {artist.bio}</p>
          <p>{artist.video_url}</p>
        </article>
      );
    });
  };
  render() {
    return (
      <div>
        <h1>Artist Page</h1>
        <section>{this.generateArtistInfo()}</section>
      </div>
    );
  }
}

export default Artist;

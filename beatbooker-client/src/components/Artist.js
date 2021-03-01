import { render } from "@testing-library/react";
import React, { Component } from "react";
import "../App.css";

class Artist extends Component {
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
            <p>{this.props.selected.video_url}</p>
          </article>
        </section>
      </div>
    );
  }
}

export default Artist;

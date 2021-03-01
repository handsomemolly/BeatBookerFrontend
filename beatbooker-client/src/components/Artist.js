import { render } from "@testing-library/react";
import React, { Component } from "react";
import "../App.css";

class Artist extends Component {
  generateArtistInfo = () => {
    return this.props.artists.map;
  };
  render() {
    return (
      <div>
        <h1>Artist Page</h1>
      </div>
    );
  }
}

export default Artist;

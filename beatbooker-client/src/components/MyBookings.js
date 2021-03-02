import React, { Component } from "react";
import "../App.css";

class MyBookings extends Component {
  state = {
    myBookings: [],
  };

  componentDidMount() {
    fetch(`http://localhost:3000/bookings`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ myBookings: data });
        console.log(this.state);
      });
  }

  renderBookings = () => {
    return this.state.myBookings.map((book) => {
      return (
        <div>
          <article className="booking-card">
            <h3>Date Requested: {book.event_date}</h3>
            <p>Artist: {book.artist.name}</p>
            <p>Event Attendees: {book.number_of_attendees}</p>
            <br></br>
          </article>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h2>My Bookings</h2>
        <section>{this.renderBookings()}</section>
      </div>
    );
  }
}

export default MyBookings;

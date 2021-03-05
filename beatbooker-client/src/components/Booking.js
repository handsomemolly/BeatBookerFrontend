import React, { Component } from "react";
import "../App.css";
import Home from "./Home";
import Artist from "./Artist";
import MyBookings from "./MyBookings";

class Booking extends Component {
  state = {
    eventDate: "mm/dd/yyyy",
    eventType: "",
    numberOfAttendees: "",
    userId: null,
    artistId: null,
    submittedBookings: [],
  };

  handleEventDateChange = (e) => {
    this.setState({
      eventDate: e.target.value,
    });
  };

  handleEventTypeChange = (e) => {
    this.setState({
      eventType: e.target.value,
    });
  };

  handleAttendeesChange = (e) => {
    this.setState({
      numberOfAttendees: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let formData = {
      event_date: this.state.eventDate,
      event_type: this.state.eventType,
      number_of_attendees: this.state.numberOfAttendees,
      user_id: this.props.user.id,
      artist_id: this.props.selected.id,
    };
    fetch(`http://localhost:3000/bookings/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ booking: formData }),
    })
      .then((res) => res.json())
      .then((book) => {
        console.log(book);
      });
    window.alert("Booking Requested!");
  };

  //     let bookingArray = this.state.submittedBookings.concat(formData);
  //     this.setState({ submittedBookings: bookingArray });
  //   };

  render() {
    return (
      <div>
        <div className="booking-form">
          <h2> Create Booking Request </h2>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label for="date">Date of Event</label>
            <input
              type="date"
              id="date"
              onChange={(e) => this.handleEventDateChange(e)}
              value={this.state.eventDate}
            />
            <label for="event_type">Event Type</label>
            <select
              id="event_type"
              value={this.state.eventType}
              onChange={this.handleEventTypeChange}
            >
              <option value="Wedding">Wedding </option>
              <option value="Conference">Conference </option>
              <option value="Party">Party </option>
              <option value="Birthday">Birthday </option>
              <option value="Do I Need a Reason?">Do I Need a Reason? </option>
            </select>
            <label for="attendees">Number of Attendees</label>
            <input
              type="select"
              id="attendees"
              onChange={(e) => this.handleAttendeesChange(e)}
              value={this.state.numberOfAttendees}
            />
            <input type="submit" className="backToArtists" />
          </form>
        </div>
      </div>
    );
  }
}

export default Booking;

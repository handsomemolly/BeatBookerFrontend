import React, { Component } from "react";
import "../App.css";
import Home from "./Home";
import Artist from "./Artist";

class Booking extends Component {
  state = {
    eventDate: "mm/dd/yyyy",
    eventType: "wedding",
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
      eventDate: this.state.eventDate,
      eventType: this.state.eventType,
      numberOfAttendees: this.state.numberOfAttendees,
    };
    let bookingArray = this.state.submittedBookings.concat(formData);
    this.setState({ submittedBookings: bookingArray });
  };

  render() {
    return (
      <div>
        <h2> Create Booking Request </h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          Date of Event
          <input
            type="date"
            onChange={(e) => this.handleEventDateChange(e)}
            value={this.state.eventDate}
          />
          Event Type
          <select
            value={this.state.eventType}
            onChange={this.handleEventTypeChange}
          >
            <option value="Wedding">Wedding </option>
            <option value="Conference">Conference </option>
            <option value="Party">Party </option>
            <option value="Birthday">Birthday </option>
            <option value="Do I Need a Reason?">Do I Need a Reason? </option>
          </select>
          Number of Attendees
          <input
            type="select"
            onChange={(e) => this.handleAttendeesChange(e)}
            value={this.state.numberOfAttendees}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Booking;

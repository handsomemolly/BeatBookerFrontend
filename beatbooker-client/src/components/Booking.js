import React, { Component } from "react";
import "../App.css";
import Home from "./Home";
import Artist from "./Artist";
import MyBookings from "./MyBookings";

class Booking extends Component {
  state = {
    eventDate: "",
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
        {!this.props.bookingDisplay ? (
          <div className="form-style-6">
            <h1> Create Booking Request </h1>
            <form
              onSubmit={(e) => this.handleSubmit(e) && this.toggleBooking()}
            >
              <input
                type="date"
                placeholder="mm/dd/yyyy"
                onChange={(e) => this.handleEventDateChange(e)}
                value={this.state.eventDate}
              />
              <select
                placeholder="wedding, party, etc.."
                value={this.state.eventType}
                onChange={this.handleEventTypeChange}
              >
                <option value="" selected disabled hidden>
                  Celebration, Baptism, Darty...
                </option>
                <option value="Wedding">Wedding </option>
                <option value="Conference">Conference </option>
                <option value="Party">Party </option>
                <option value="Birthday">Birthday </option>
                <option value="Do I Need a Reason?">
                  Do I Need a Reason?{" "}
                </option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                onChange={(e) => this.handleAttendeesChange(e)}
                value={this.state.numberOfAttendees}
                placeholder="# Attending"
              />
              <input
                type="submit"
                value="Request Booking"
                className="backToArtists"
              />
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Booking;

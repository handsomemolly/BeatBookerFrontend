import React, { Component } from "react";
import "../App.css";

class EditBooking extends Component {
  state = {
    // eventDate: this.props.event_date,
    eventDateInput: "",
    // eventType: this.props.event_type,
    numberOfAttendees: this.props.attendees,
    attendeeInput: "",
    myBookings: this.props.myBookings,
    // userId: this.props.user,
    // artistId: this.props.artist,
  };

  handleEventDateChange = (e) => {
    this.setState({
      eventDateInput: e.target.value,
    });
  };

  handleAttendeesChange = (e) => {
    this.setState({
      attendeeInput: e.target.value,
    });
  };

  handleBooking = (e) => {
    e.preventDefault();
    let newBooking = {
      event_date: this.state.eventDateInput,
      event_type: this.props.eventType,
      number_of_attendees: this.state.attendeeInput,
      user_id: this.props.user,
      artist_id: this.props.artist,
    };
    fetch(`http://localhost:3000/bookings/${this.props.bookingId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ booking: newBooking }),
    })
      .then((res) => res.json())
      .then((booking) => {
        this.setState({
          myBookings: booking,
        });
      });
    this.props.toggleEdit();
  };

  render() {
    return (
      <div>
        {!this.props.displayEdit ? (
          <form
            onSubmit={(e) => {
              this.handleBooking(e) && this.props.getNewBookings();
            }}
          >
            <label for="date">Date of Event</label>
            <input
              type="date"
              id="date"
              onChange={(e) => this.handleEventDateChange(e)}
              value={this.state.eventDateInput}
            />
            {/* <label for="event_type">Event Type</label> */}
            {/* <select
            id="event_type"
            value={this.state.eventType}
            onChange={this.handleEventTypeChange}
          >
            <option value="Wedding">Wedding </option>
            <option value="Conference">Conference </option>
            <option value="Party">Party </option>
            <option value="Birthday">Birthday </option>
            <option value="Do I Need a Reason?">Do I Need a Reason? </option>
          </select> */}
            <label for="attendees">Attendees</label>
            <input
              type="select"
              id="attendees"
              onChange={(e) => this.handleAttendeesChange(e)}
              value={this.state.attendeeInput}
            />
            <input
              type="submit"
              className="backToArtists"
              onClick={this.props.getNewBookings()}
            />
          </form>
        ) : null}
      </div>
    );
  }
}

export default EditBooking;

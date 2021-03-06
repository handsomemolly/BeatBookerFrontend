import React, { Component } from "react";
import "../App.css";

class EditBooking extends Component {
  state = {
    eventDate: this.props.event_date,
    eventType: this.props.event_type,
    numberOfAttendees: this.props.attendees,
    userId: this.props.user,
    artistId: this.props.artist,
  };

  handleEventDateChange = (e) => {
    this.setState({
      eventDate: e.target.value,
    });
  };

  handleAttendeesChange = (e) => {
    this.setState({
      numberOfAttendees: e.target.value,
    });
  };

  handleBooking = (e) => {
    e.preventDefault();
    let newBooking = {
      event_date: this.state.eventDate,
      event_type: this.state.eventType,
      number_of_attendees: this.state.numberOfAttendees,
      user_id: this.state.userId,
      artist_id: this.state.artistId,
    };
    fetch(`http://localhost:3000/bookings/${this.props.bookingId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ booking: newBooking }),
    })
      .then((res) => res.json())
      .then(console.log(this.state));
  };

  render() {
    return (
      <div>
        {!this.props.displayEdit ? (
          <form onSubmit={(e) => this.handleBooking(e)}>
            <label for="date">Date of Event</label>
            <input
              type="date"
              id="date"
              onChange={(e) => this.handleEventDateChange(e)}
              value={this.state.eventDate}
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
            <label for="attendees">Number of Attendees</label>
            <input
              type="select"
              id="attendees"
              onChange={(e) => this.handleAttendeesChange(e)}
              value={this.state.numberOfAttendees}
            />
            <input type="submit" className="backToArtists" />
          </form>
        ) : null}
      </div>
    );
  }
}

export default EditBooking;

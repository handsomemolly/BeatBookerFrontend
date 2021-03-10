import React, { Component } from "react";
import "../App.css";
import EditBooking from "./EditBooking";
import Logo from "../logoCrop.png";

class MyBookings extends Component {
  state = {
    myBookings: [],
    eventDate: "",
    eventType: "",
    numberOfAttendees: "",
    displayEdit: true,
  };

  componentDidMount() {
    fetch(`http://localhost:3000/bookings`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ myBookings: data });
        console.log(this.state);
      });
  }

  getNewBookings = () => {
    fetch(`http://localhost:3000/bookings`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ myBookings: data });
        console.log(this.state);
      });
  };

  deleteBooking = (book) => {
    fetch(`http://localhost:3000/bookings/${book.id}`, {
      method: "DELETE",
    }).then(() =>
      this.setState({
        myBookings: [...this.state.myBookings].filter((b) => b.id !== book.id),
      })
    );
  };

  toggleEdit = () => {
    this.setState({ displayEdit: !this.state.displayEdit });
  };

  formatDate = (book) => {
    var allDate = book.split(" ");
    var thisDate = allDate[0].split("-");
    var newDate = [thisDate[2], thisDate[1], thisDate[0]].join("-");
    return newDate;
  };

  renderBookings = () => {
    let filtered = this.state.myBookings.filter((b) => b.user_id === b.user.id);
    return filtered.map((book) => {
      return (
        <li className="table-row">
          <div className="col col-1" data-label="Date">
            {book.event_date}
          </div>
          <div className="col col-2" data-label="Artist">
            {book.artist.name}
          </div>
          <div className="col col-3" data-label="Attendees">
            {book.number_of_attendees}
          </div>
          <div className="col col-4" data-label="Price">
            ${book.artist.price}
          </div>
          <tr>
            <button className="backToArtists" onClick={this.toggleEdit}>
              Edit
            </button>
            <button
              className="deleteBooking"
              onClick={() => this.deleteBooking(book)}
            >
              Delete
            </button>
          </tr>
          <br></br>
          <div>
            <EditBooking
              user={book.user.id}
              artist={book.artist.id}
              bookingId={book.id}
              eventDate={book.event_date}
              artistName={book.artist.name}
              eventType={book.event_type}
              attendees={book.number_of_attendees}
              displayEdit={this.state.displayEdit}
              toggleEdit={this.toggleEdit}
              myBookings={this.state.myBookings}
              getNewBookings={this.getNewBookings}
            />
          </div>
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <div>
          <img src={Logo} />
        </div>
        <h1 className="booking-title">My Bookings</h1>

        <div className="container">
          <ul className="bookingTable">
            <li className="table-header">
              <div className="col col-1">Date</div>
              <div className="col col-2">Artist</div>
              <div className="col col-3">Attendees</div>
              <div className="col col-4">Price</div>
              <div className="col col-5">Edit/Delete</div>
            </li>
            {this.renderBookings()}
          </ul>
        </div>
      </div>
    );
  }
}

export default MyBookings;

// parent component
// state{
// activeBooking: #id,
// attendants: "",
// event: "",}

// fetch(localhost:3000/bookings/#id)
// .then(res => res.json())
// .then(booking => {this.setState({
// attendants: booking.attendants,
// event: booking.event})})

// render() {
// return activeBooking: attendants: this.state.attendants}

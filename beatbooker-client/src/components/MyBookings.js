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

  deleteBooking = (book) => {
    fetch(`http://localhost:3000/bookings/${book.id}`, {
      method: "DELETE",
    }).then(() =>
      this.setState({
        myBookings: [...this.state.myBookings].filter((b) => b.id !== book.id),
      })
    );
  };

  renderBookings = () => {
    return this.state.myBookings.map((book) => {
      return (
        <li className="table-row">
          <div className="col col-1" data-label="Date Requested">
            {book.event_date}
          </div>
          <div className="col col-2" data-label="Artist">
            {book.artist.name}
          </div>
          <div className="col col-3" data-label="Attendees">
            {book.number_of_attendees}
          </div>
          <div className="col col-4" data-label="Price">
            {book.price}
          </div>
          <button>Edit</button>
          <button onClick={() => this.deleteBooking(book)}>
            Delete Request
          </button>
          <br></br>
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <h2>My Bookings</h2>
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-1">Date Requested</div>
              <div className="col col-2">Artist</div>
              <div className="col col-3">Attendees</div>
              <div className="col col-4">Price</div>
            </li>
            {this.renderBookings()}
          </ul>
        </div>
      </div>
    );
  }
}

export default MyBookings;

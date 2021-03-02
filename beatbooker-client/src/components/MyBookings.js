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
          <button>Delete Request</button>
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

/* <div class="container">
  <h2>
    Responsive Tables Using LI <small>Triggers on 767px</small>
  </h2>
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1">Job Id</div>
      <div class="col col-2">Customer Name</div>
      <div class="col col-3">Amount Due</div>
      <div class="col col-4">Payment Status</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Job Id">
        42235
      </div>
      <div class="col col-2" data-label="Customer Name">
        John Doe
      </div>
      <div class="col col-3" data-label="Amount">
        $350
      </div>
      <div class="col col-4" data-label="Payment Status">
        Pending
      </div>
    </li>
  </ul>
</div>; */

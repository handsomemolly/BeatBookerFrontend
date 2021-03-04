import React, { Component } from "react";
import "../App.css";

class Review extends Component {
  state = {
    description: "",
    rating: "",
    userId: null,
    artistId: null,
    reviews: [],
  };

  componentDidMount() {
    fetch(`http://localhost:3000/reviews`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ reviews: data });
        console.log(this.state);
      });
  }

  renderReviews = () => {
    return this.state.reviews.map((rev) => {
      return (
        <div className="rev">
          <p>
            <b>{rev.user.username} writes:</b> {rev.description}
          </p>
          <h4>Rating: {rev.rating}</h4>
        </div>
      );
    });
  };

  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  handleRatingChange = (e) => {
    this.setState({
      rating: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let reviewForm = {
      description: this.state.description,
      rating: this.state.rating,
      user_id: this.props.user.id,
      artist_id: this.props.selected.id,
    };
    fetch(`http://localhost:3000/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ review: reviewForm }),
    })
      .then((res) => res.json())
      .then((rev) => {
        console.log(rev);
      });
  };

  render() {
    return (
      <div>
        <h3>Reviews</h3>
        <div className="reviews">{this.renderReviews()}</div>
      </div>
    );
  }
}

export default Review;

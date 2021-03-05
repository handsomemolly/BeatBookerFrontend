import React, { Component } from "react";
import "../App.css";

class Review extends Component {
  state = {
    description: "",
    rating: "",
    userId: null,
    artistId: null,
    reviews: [],
    display: false,
  };

  componentDidMount() {
    this.renderReviews();
    fetch(`http://localhost:3000/reviews`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ reviews: data });
        console.log(this.state);
      });
  }

  //   AddReview = () => {

  //   }

  renderReviews = () => {
    let filtered = this.state.reviews.filter(
      (review) => this.props.selected.id === review.artist.id
    );
    return filtered.map((rev) => {
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
        // let newReviews = this.state.reviews.map((r) =>
        //   r.id == rev.id ? rev : r
        // );
        // this.setState({ reviews: newReviews });
        this.setState({
          reviews: [...this.state.reviews, rev],
          description: "",
          rating: "",
        });
      });
  };

  render() {
    return (
      <div>
        <h3>Reviews</h3>
        <div className="reviews">{this.renderReviews()}</div>
        <div className="review-form">
          <h4>Add Review</h4>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label for="description"></label>
            <input
              type="text"
              size="75"
              id="description"
              value={this.state.description}
              onChange={(e) => this.handleDescriptionChange(e)}
            />
            <label for="rating">Rating</label>
            <select
              id="event_type"
              value={this.state.rating}
              onChange={this.handleRatingChange}
              placeholder="1"
            >
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5?">5</option>
            </select>
            <input type="submit" className="addReview" />
          </form>
        </div>
      </div>
    );
  }
}

export default Review;

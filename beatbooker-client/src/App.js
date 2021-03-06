import React, { Component } from "react";
import "./App.css";
import User from "./components/User.js";
import Navbar from "./components/Navbar.js";
import { Switch, withRouter, Redirect } from "react-router-dom";
import Login from "./components/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Artist from "./components/Artist";
import MyBookings from "./components/MyBookings";
const API = "http://localhost:3000/";
class App extends Component {
  state = {
    user: {},
    error: false,
    loggedIn: false,
  };
  componentDidMount() {
    const token = localStorage.token;
    if (token) {
      this.persistUser(token);
    }
  }
  persistUser = (token) => {
    fetch(API + "/persist", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.username) {
          const { username, id } = data;
          this.setState({
            user: {
              username,
              id,
            },
          });
        }
      });
  };
  handleAuthResponse = (data) => {
    // debugger;
    if (data.user.username) {
      // const { username, id, token } = data;
      const username = data.user.username;
      const id = data.user.id;
      const token = data.jwt;
      this.setState({
        user: {
          username,
          id,
        },
        loggedIn: true,
        error: null,
      });
      localStorage.setItem("token", token);
      this.props.history.push("/home");
    } else if (data.error) {
      this.setState({
        error: data.error,
      });
    }
  };
  handleLogin = (e, userInfo) => {
    e.preventDefault();
    fetch(API + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userInfo }),
    })
      .then((resp) => resp.json())
      .then(
        (data) => this.handleAuthResponse(data)
        // this.props.history.push("/home");
      )
      .catch(console.log);
  };
  handleSignup = (e, userInfo) => {
    e.preventDefault();
    fetch(API + "sign_up.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userInfo }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.handleAuthResponse(data);
      })
      .catch(console.log);
  };
  handleLogout = () => {
    localStorage.clear();
    this.setState({ user: {} });
  };
  // renderLoginPage = () => <Login handleLoginOrSignup={this.handleLogin} />;
  // renderSignUpPage = () => <Login handleLoginOrSignup={this.handleSignup} />;
  // renderHomePage = () => <Home username={this.state.user.username} />;
  render() {
    const { user, error } = this.state;
    return (
      <div className="App">
        <Navbar user={user} handleLogout={this.handleLogout} />
        {/* <User /> */}
        <Route
          path="/login"
          render={(routerProps) => (
            <Login {...routerProps} handleLoginOrSignup={this.handleLogin} />
          )}
        />
        <Route
          path="/signup"
          render={(routerProps) => (
            <Login {...routerProps} handleLoginOrSignup={this.handleSignup} />
          )}
        />
        {!user.id && <Redirect to="/login" />}
        <Route
          path="/home"
          render={(routerProps) => (
            <Home {...routerProps} user={this.state.user} />
          )}
        />
        <Route path="/bookings" component={MyBookings} />
      </div>
    );
  }
}
export default withRouter(App);

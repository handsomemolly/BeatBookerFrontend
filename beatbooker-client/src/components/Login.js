import React from "react";
import Logo from "../logoLrg.png";
class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };
  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div>
        <div className="login">
          <h1>Welcome to BeatBooker</h1>
          <form
            action="#"
            onSubmit={(e) => this.props.handleLoginOrSignup(e, this.state)}
          >
            <p>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </p>
            <p>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </p>
            <p class="submit">
              <input type="submit" className="float" value="Submit" />
            </p>
          </form>
          <div>
            <img src={Logo} />
          </div>
        </div>
      </div>
    );
  }
}
export default Login;

{
  /* <div class="login">
  <div class="heading">
    <h2>Sign in</h2>
    <form action="#">

      <div class="input-group input-group-lg">
        <span class="input-group-addon"><i class="fa fa-user"></i></span>
        <input type="text" class="form-control" placeholder="Username or email">
          </div>

        <div class="input-group input-group-lg">
          <span class="input-group-addon"><i class="fa fa-lock"></i></span>
          <input type="password" class="form-control" placeholder="Password">
        </div>

        <button type="submit" class="float">Login</button>
       </form>
 		</div>
 </div> */
}

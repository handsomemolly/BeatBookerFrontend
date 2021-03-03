import React from "react";
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
          <div className="heading">
            <h1>Log In</h1>
          </div>

          <form
            action="#"
            onSubmit={(e) => this.props.handleLoginOrSignup(e, this.state)}
          >
            <div className="input-group input-group-lg">
              <span class="input-group-addon">
                <i class="fa fa-user"></i>
              </span>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <br />
            <div className="input-group input-group-lg">
              <span class="input-group-addon">
                <i class="fa fa-user"></i>
              </span>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <br />
            <button type="submit" className="float" value="Submit">
              Log In
            </button>
          </form>
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

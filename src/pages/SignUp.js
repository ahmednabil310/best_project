import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form
          onSubmit={this.handleSubmit}
          className="d-flex flex-column align-items-center col-sm-12"
        >
          <h1>Sign Up</h1>
          <input
            onChange={this.handleChange}
            name="username"
            type="text"
            required
            placeholder="Username"
            id="username"
          />
          <input
            onChange={this.handleChange}
            name="email"
            type="email"
            required
            placeholder="Email"
            autoComplete="on"
            id="email"
          />

          <input
            onChange={this.handleChange}
            name="password"
            type="password"
            required
            placeholder="Password"
            id="password"
          />
          <input
            onChange={this.handleChange}
            name="password"
            type="password"
            required
            placeholder="Password Again"
            id="password"
          />
          <Link to="/">
            <button type="submit" className="mt-2">
              Sign Up
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
export default SignUp;

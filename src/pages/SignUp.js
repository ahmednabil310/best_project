import React from "react";
import "./signup.css";

class SignUp extends React.Component {
  render() {
    return (
      <div className="container page mt-3">
        <div className="row">
          <div className="col-md-6 col-xs-12 offset-md-3">
            <h1 className="text-center">Sign Up</h1>

            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    onChange={this.handleChange}
                    name="username"
                    type="text"
                    required
                    placeholder="Username"
                    id="username"
                    className=" form-control form-control-lg"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    onChange={this.handleChange}
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    autoComplete="on"
                    id="email"
                    className="form-control form-control-lg"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    onChange={this.handleChange}
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                    id="password"
                    className="form-control form-control-lg"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    onChange={this.handleChange}
                    name="password"
                    type="password"
                    required
                    placeholder="Confirm Password"
                    id="confirmpassword"
                    className="form-control form-control-lg"
                  />
                </fieldset>
                <button type="submit">Sign Up</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;

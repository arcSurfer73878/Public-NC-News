import React from "react";
import "../App.css";
// import Articles from "./Articles";
import { Link } from "@reach/router";

class SideBar extends React.Component {
  state = {
    username: "",
    login: false
  };
  render() {
    return (
      <div>
        <div className="login">
          {this.state.login ? (
            <h2>You are logged</h2>
          ) : (
            <form onSubmit={this.handleSubmit}>
              <div className="username">
                <select
                  value={this.state.username}
                  onChange={this.handleChange}
                >
                  <option>Select a username</option>
                  <option value="tickle122">tickle122</option>
                  <option value="grumpy19">grumpy19</option>
                  <option value="happyamy2016">happyamy2016</option>
                  <option value="cooljmessy">cooljmessy</option>
                  <option value="weegembump">weegembump</option>
                  <option value="jessjelly">jessjelly</option>
                </select>
                <div>
                  <button>Login</button>
                </div>
              </div>
            </form>
          )}
        </div>
        <span className="btn-group">
          <Link style={{ textDecoration: "none" }} to="/ArticlePoster">
            <button>Add An Article</button>
          </Link>
          {/* <Link to="/">
            <button onClick={Articles}>All</button>
          </Link> */}
          <Link style={{ textDecoration: "none" }} to="/popular">
            <button>Most Popular Articles</button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/mostcomments">
            <button>Most Commented Articles</button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/users">
            <button>All Users</button>
          </Link>
        </span>
      </div>
    );
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.username);
    this.setState({
      login: true
    });
    // api request - is this a real user?
    // if real - store user in App state
    // hide login form
  };
  handleChange = event => {
    const value = event.target.value;
    this.setState(
      {
        username: value
      },
      () => {
        console.log(this.state);
      }
    );
  };
}

export default SideBar;

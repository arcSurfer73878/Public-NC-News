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
        <div>
          {this.state.login ? (
            <h2>You are logged</h2>
          ) : (
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                placeholder="E.g.: jessjelly"
                type="text"
                id="username"
                name="username"
                onChange={this.handleChange}
                value={this.state.username}
              />
              <button>Login</button>
            </form>
          )}
        </div>
        <span className="btn-group">
          <Link to="/ArticlePoster">
            <button>Add an article</button>
          </Link>
          {/* <Link to="/">
            <button onClick={Articles}>All</button>
          </Link> */}
          <Link to="/popular">
            <button>Popular</button>
          </Link>
          <Link to="/mostcomments">
            <button>Most Commented</button>
          </Link>
          <Link to="/users">
            <button>Users</button>
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

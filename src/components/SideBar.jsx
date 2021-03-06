import React from "react";
import "../App.css";
import { Link } from "@reach/router";
import PropTypes from "prop-types";
class SideBar extends React.Component {
  state = {
    username: "",
    login: false
  };
  render() {
    return (
      <div>
        <div className="login">
          {this.state.login && this.state.username ? (
            <form onSubmit={this.Logout}>
              <div className="username">
                <h4>You are logged as {this.state.username}</h4>
                <div>
                  <button>Logout</button>
                </div>
              </div>
            </form>
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
  };
  Logout = event => {
    event.preventDefault();
    this.props.logout();
    this.setState({
      username: "",
      login: false
    });
  };
  handleChange = event => {
    const value = event.target.value;
    this.setState({
      username: value
    });
  };
}
SideBar.propTypes = {
  username: PropTypes.string
};
export default SideBar;

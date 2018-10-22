import React, { Component } from "react";
import "../App.css";
import * as api from "../api";
import { Link } from "@reach/router";
import SearchUser from "./SearchUser";
import PropTypes from "prop-types";
class Users extends Component {
  state = {
    users: [],
    userFilter: null
  };
  render() {
    return (
      <ul>
        <div className="search">
          <SearchUser UserSearch={this.UserSearch} />
        </div>
        <br />
        <div className="title">
          <h2>Choose a User to see his/her Articles</h2>
        </div>
        <div className="row">
          {this.state.users.reduce((acc, user) => {
            if (
              !this.state.userFilter ||
              user.name
                .toLowerCase()
                .includes(this.state.userFilter.toLowerCase()) ||
              user.username.includes(this.state.userFilter)
            ) {
              acc.push(
                <div key={user._id} className="titre">
                  <Link
                    key={user._id}
                    to={`/users/${user.username}`}
                    style={{ textDecoration: "none" }}
                  >
                    <h2>{user.username}</h2>
                  </Link>
                </div>
              );
            }
            return acc;
          }, [])}
        </div>
      </ul>
    );
  }
  UserSearch = keyword => {
    this.setState({ userFilter: keyword });
  };
  componentDidMount() {
    this.fetchUsers();
  }
  fetchUsers = () => {
    api.getUsers().then(users =>
      this.setState({
        users
      })
    );
  };
}
Users.propTypes = {
  users: PropTypes.array
};
export default Users;

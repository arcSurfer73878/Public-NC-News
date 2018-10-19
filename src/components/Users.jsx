import React, { Component } from "react";
import "../App.css";
import * as api from "../api";
import SearchUser from "./SearchUser";

class Topics extends Component {
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
          <h2>Users</h2>
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
                  <h2>{user.username}</h2>
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

export default Topics;

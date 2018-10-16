import React, { Component } from "react";
import "../App.css";
import * as api from "../api";
import Search from "./Search";

class Topics extends Component {
  state = {
    users: []
  };
  render() {
    return (
      <div>
        <search>
          <Search articleSearch={this.articleSearch} />
        </search>
        <div>
          <p>Users</p>
          <div>
            {this.state.users.map(user => {
              return <h2>{user.username}</h2>;
            })}
          </div>
        </div>
      </div>
    );
  }
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

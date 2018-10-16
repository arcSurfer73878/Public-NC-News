import React from "react";
import "../App.css";
import Articles from "./Articles";
import { Link } from "@reach/router";
import Users from "./Users";

class SideBar extends React.Component {
  render() {
    return (
      <span className="btn-group">
        <Link to="/">
          <button onClick={Articles}>All</button>
        </Link>
        <Link to="/popular">
          <button>Popular</button>
        </Link>
        <Link to="/comments">
          <button>Most Commented</button>
        </Link>
        <Link to="/users">
          <button onClick={Users}>Users</button>
        </Link>
      </span>
    );
  }
}

export default SideBar;

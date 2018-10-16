import React, { Component } from "react";
import { Link } from "@reach/router";
import Articles from "./Articles";
import Topics from "./Topics";
import About from "./About";

class Nav extends Component {
  render() {
    return (
      <div className="home">
        <Link onClick={Articles} to="/">
          <h2>Home</h2>
        </Link>
        <Link onClick={Topics} to="/topics">
          <h2>Topics</h2>
        </Link>
        <Link onClick={About} to="/about">
          <h2>About the website</h2>
        </Link>
      </div>
    );
  }
}

export default Nav;

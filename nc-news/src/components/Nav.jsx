import React, { Component } from "react";
import { Link } from "@reach/router";
import Articles from "./Articles";
// import Topics from "./Topics";
import * as api from "../api";
import About from "./About";

class Nav extends Component {
  state = {
    topics: []
  };
  render() {
    const { topics } = this.state;
    return (
      <div className="home">
        {!topics.length ? (
          <span>Loading...</span>
        ) : (
          <div>
            <Link onClick={Articles} to="/">
              <na> Home </na>
            </Link>
            {topics.map(topic => {
              return (
                <Link key={topic._id} to={`/topics/${topic.slug}`}>
                  <na> {topic.title} </na>
                </Link>
              );
            })}
            <Link onClick={About} to="/about">
              <na> About the website </na>
            </Link>
          </div>
        )}
      </div>
    );
  }
  componentDidMount() {
    this.fetchTopics();
  }
  fetchTopics = () => {
    api.getTopics().then(topics =>
      this.setState({
        topics
      })
    );
  };
}

export default Nav;

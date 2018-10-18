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
          <>
            <Link onClick={Articles} to="/">
              <h2> Home </h2>
            </Link>
            {topics.map(topic => {
              return (
                <Link key={topic._id} to={`/topics/${topic.slug}`}>
                  <h2> {topic.title} </h2>
                </Link>
              );
            })}
            <Link onClick={About} to="/about">
              <h2> About the website </h2>
            </Link>
          </>
        )}
        {/* <Link onClick={Topics} to="/topics">
          <h2>Topics</h2>
        </Link> */}
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

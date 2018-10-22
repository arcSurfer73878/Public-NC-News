import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api";
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
            <Link to="/">
              <span> Home </span>
            </Link>
            {topics.map(topic => {
              return (
                <Link key={topic._id} to={`/topics/${topic.slug}`}>
                  <span> {topic.title} </span>
                </Link>
              );
            })}
            <Link to="/about">
              <span> About the website </span>
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

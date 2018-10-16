import React, { Component } from "react";
import "../App.css";
import * as api from "../api";
import Search from "./Search";

class Topics extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <div>
        <search>
          <Search articleSearch={this.articleSearch} />
        </search>
        <div>
          <p>Topics</p>
          <div>
            {this.state.topics.map(topic => {
              return <h2>{topic.title}</h2>;
            })}
          </div>
        </div>
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

export default Topics;

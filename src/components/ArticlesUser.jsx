import React, { Component } from "react";
import "../App.css";
import * as api from "../api";
import ListUser from "./ListUser";
import Search from "./Search";
import { navigate } from "@reach/router";
class Articles extends Component {
  state = {
    articles: [],
    articleFilter: null,
    err: null
  };
  render() {
    return (
      <ul>
        {!this.props.topic ? (
          <div>
            <div className="search">
              <Search articleSearch={this.articleSearch} />
            </div>
            <br />
            <div className="title">
              <h2>Articles from {this.props.username}</h2>
            </div>
            <div className="row">
              <ListUser
                articles={this.state.articles}
                username={this.props.username}
              />
            </div>
          </div>
        ) : (
          <div className="title">
            <h2>Error: No Such User!</h2>
          </div>
        )}
      </ul>
    );
  }
  articleSearch = keyword => {
    this.setState({ articleFilter: keyword });
  };
  componentDidMount() {
    this.fetchArticles();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.username !== this.props.username) {
      this.fetchArticles();
    }
  }
  fetchArticles = () => {
    api
      .getArticles()
      .then(articles =>
        this.setState({
          articles
        })
      )
      .catch(err => {
        navigate("/error", { replace: true, state: { err: err.message } });
      });
  };
}
export default Articles;

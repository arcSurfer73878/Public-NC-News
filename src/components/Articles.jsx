import React, { Component } from "react";
import "../App.css";
import * as api from "../api";
import ArticlesList from "./ArticlesList";
import Search from "./Search";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";
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
              <h2>Latest Articles</h2>
            </div>
            <div className="row">
              <ArticlesList
                articles={this.state.articles}
                articleFilter={this.state.articleFilter}
              />
            </div>
          </div>
        ) : this.props.topic === "coding" ? (
          <div>
            <div className="title">
              <h2>Coding Articles</h2>
            </div>
            <div className="row">
              <ArticlesList articles={this.state.articles} />
            </div>
          </div>
        ) : this.props.topic === "football" ? (
          <div>
            <div className="title">
              <h2>Football Articles</h2>
            </div>
            <div className="row">
              <ArticlesList articles={this.state.articles} />
            </div>
          </div>
        ) : this.props.topic === "cooking" ? (
          <div>
            <div className="title">
              <h2>Cooking Articles</h2>
            </div>
            <div className="row">
              <ArticlesList articles={this.state.articles} />
            </div>
          </div>
        ) : (
          <div className="title">
            <h2>Error: No Such Topic!</h2>
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
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }
  fetchArticles = () => {
    api
      .getArticles(this.props.topic)
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
Articles.propTypes = {
  articles: PropTypes.array
};
export default Articles;

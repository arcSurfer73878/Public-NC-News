import React, { Component } from "react";
import "../App.css";
import * as api from "../api";
import PropTypes from "prop-types";
import List from "./List";
import Search from "./Search";
class Articles extends Component {
  state = {
    articles: [],
    err: null,
    articleFilter: null
  };
  render() {
    return (
      <div>
        <search>
          <Search articleSearch={this.articleSearch} />
        </search>
        <div>
          <p>Latest Articles</p>
          <div>
            <List
              articles={this.state.articles}
              articleFilter={this.state.articleFilter}
            />
          </div>
        </div>
      </div>
    );
  }
  articleSearch = keyword => {
    this.setState({ articleFilter: keyword });
  };
  componentDidMount() {
    this.fetchArticles();
  }
  componentDidUpdate(prevProps) {
    console.log(this.props.topic);
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }
  fetchArticles = () => {
    api.getArticles(this.props.topics).then(articles =>
      this.setState({
        articles
      })
    );
  };
  // singleArticle = () => {};
}
Articles.propTypes = {
  articles: PropTypes.array.isRequired,
  voteMod: PropTypes.number.isRequired
};

export default Articles;

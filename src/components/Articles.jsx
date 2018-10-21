import React, { Component } from "react";
import "../App.css";
import * as api from "../api";
import List from "./List";
import Search from "./Search";
class Articles extends Component {
  state = {
    articles: [],
    articleFilter: null
  };
  render() {
    return (
      <ul>
        <div className="search">
          <Search articleSearch={this.articleSearch} />
        </div>
        <br />
        <div className="title">
          <h2>Latest Articles</h2>
        </div>
        <div className="row">
          <List
            articles={this.state.articles}
            articleFilter={this.state.articleFilter}
          />
        </div>
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
    api.getArticles(this.props.topic).then(articles =>
      this.setState({
        articles
      })
    );
  };
}

export default Articles;

import React, { Component } from "react";
import "../App.css";
import * as api from "../api";
import List3 from "./List3";
import Search from "./Search";
class Popular extends Component {
  state = {
    articles: [],
    err: null,
    articleFilter: null
  };
  render() {
    return (
      <div>
        <div className="search">
          <Search articleSearch={this.articleSearch} />
        </div>
        <div>
          <p>Popular</p>
          <div>
            <List3
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

export default Popular;

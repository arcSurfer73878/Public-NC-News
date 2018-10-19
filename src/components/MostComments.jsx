import React, { Component } from "react";
import "../App.css";
import * as api from "../api";
import List2 from "./List2";
import Search from "./Search";
class MostComments extends Component {
  state = {
    articles: [],
    err: null,
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
          <h2>Most Commented</h2>
        </div>
        <div className="row">
          <List2
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

export default MostComments;

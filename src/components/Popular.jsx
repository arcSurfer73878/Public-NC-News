import React, { Component } from "react";
import "../App.css";
import * as api from "../api";
import PopularList from "./PopularList";
import Search from "./Search";
import PropTypes from "prop-types";
class Popular extends Component {
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
          <h2>Most Popular Articles</h2>
        </div>
        <div className="row">
          <PopularList
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
    api.getArticles(this.props.topics).then(articles =>
      this.setState({
        articles
      })
    );
  };
}
Popular.propTypes = {
  articles: PropTypes.array
};
export default Popular;

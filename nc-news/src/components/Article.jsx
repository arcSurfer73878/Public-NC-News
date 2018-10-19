import React, { Component } from "react";
import * as api from "../api";
// import Comments from "./Comments.jsx"
import Search from "./Search";
import Comment from "./Comment";
import SingleList from "./SingleList";
import { navigate } from "@reach/router";

class Article extends Component {
  state = { article: {} };
  render() {
    return (
      <ul>
        <div className="search">
          <Search articleSearch={this.articleSearch} />
        </div>
        <br />
        <div className="title">
          <h2>Article</h2>
        </div>
        <div className="row">
          <SingleList article={this.state.article} />
        </div>
        <div className="comment">
          <Comment id={this.props.id} user={this.props.user} />
        </div>
      </ul>
    );
  }
  componentDidMount() {
    api
      .getArticle(this.props.id)
      .then(article => {
        this.setState({ article });
      })
      .catch(err => {
        navigate("/error", { replace: true, state: { err: err.message } });
      });
  }
}

export default Article;

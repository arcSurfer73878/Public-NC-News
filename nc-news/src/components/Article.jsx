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
      <div>
        <div className="search">
          <Search articleSearch={this.articleSearch} />
        </div>
        <div>
          <p>Article</p>
          <div>
            <SingleList article={this.state.article} />
          </div>
          <Comment id={this.props.id} user={this.props.user} />
        </div>
      </div>
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

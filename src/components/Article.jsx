import React, { Component } from "react";
import * as api from "../api";
import Comment from "./Comment";
import SingleList from "./SingleList";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";

class Article extends Component {
  state = { article: {}, delete: false, err: null };
  render() {
    return (
      <ul>
        {this.state.delete ? (
          <h2>Article Deleted</h2>
        ) : (
          <div>
            <div className="title">
              <h2>Article</h2>
            </div>
            <div className="row">
              <SingleList article={this.state.article} />
            </div>
            <div className="comment">
              <Comment id={this.props.id} user={this.props.user} />
            </div>
          </div>
        )}
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
Article.propTypes = {
  article: PropTypes.object,
  delete: PropTypes.bool
};
export default Article;

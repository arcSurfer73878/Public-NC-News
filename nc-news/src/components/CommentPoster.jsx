import React, { Component } from "react";
import "../App.css";

class CommentPoster extends Component {
  state = {
    body: "",
    addedComment: false
  };
  render() {
    return (
      <div id="comment_form">
        {this.state.addedComment ? (
          <h2>Your comment has been added!</h2>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <textarea
              rows="10"
              id="comment"
              placeholder="Write a comment..."
              type="text"
              aria-label="comment body"
              onChange={this.handleChange}
            />
            <br />
            <div className="username">
              <button>Post</button>
            </div>
          </form>
        )}
      </div>
    );
  }
  handleChange = event => {
    const value = event.target.value;
    this.setState({
      body: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    // add comment
    this.props.addComment(this.state.body);
    this.setState({
      addedComment: true
    });
  };
}

export default CommentPoster;

import React, { Component } from "react";
import * as api from "../api";
import CommentPoster from "./CommentPoster";
import ListComment from "./ListComment";
import PropTypes from "prop-types";
class Comment extends Component {
  state = {
    comments: []
  };
  render() {
    return (
      <div>
        <CommentPoster addComment={this.addComment} user={this.props.user} />
        <h2>Comments:</h2>
        <ul>
          <div className="row">
            <ListComment
              comments={this.state.comments}
              deleteComment={this.deleteComment}
              user={this.props.user}
            />
          </div>
        </ul>
      </div>
    );
  }
  componentDidMount = () => {
    api.getComments(this.props.id).then(comments =>
      this.setState({
        comments
      })
    );
  };
  addComment = body => {
    api.postComment(this.props.id, body, this.props.user).then(comment => {
      this.setState({
        comments: [comment, ...this.state.comments]
      });
    });
  };
  deleteComment = (id, comment) => {
    api.deleteComment(id, comment).then(() => {
      this.setState(state => ({
        comments: state.comments.filter(comment => comment._id !== id)
      }));
    });
  };
}
Comment.propTypes = {
  comments: PropTypes.array
};
export default Comment;

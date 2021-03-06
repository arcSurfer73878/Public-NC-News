import React, { Component } from "react";
import * as api from "../api";
import PropTypes from "prop-types";
class CommentVotes extends Component {
  state = {
    voteMod: 0
  };
  render() {
    return (
      <div>
        <h4>votes: {this.props.comment.votes + this.state.voteMod}</h4>
        <button
          className="bouton"
          onClick={() => this.showLove2(this.props.comment._id, "up")}
          disabled={this.state.voteMod === 1}
        >
          Up
        </button>
        <button
          className="bouton"
          onClick={() => this.showLove2(this.props.comment._id, "down")}
          disabled={this.state.voteMod === -1}
        >
          Down
        </button>
        {this.props.user.username === this.props.comment.created_by.username ? (
          <button
            className="bouton3"
            onClick={() =>
              this.props.deleteComment(
                this.props.comment._id,
                this.props.comment
              )
            }
          >
            Delete
          </button>
        ) : (
          <div />
        )}
      </div>
    );
  }
  showLove2 = (id, direction) => {
    api.voteComment(id, direction).catch(err => {
      this.setState(err);
    });

    this.setState({
      voteMod:
        direction === "up" ? this.state.voteMod + 1 : this.state.voteMod - 1
    });
  };
}
CommentVotes.propTypes = {
  voteMod: PropTypes.number
};
export default CommentVotes;

import React, { Component } from "react";
import * as api from "../api";
import PropTypes from "prop-types";
class Votes extends Component {
  state = {
    voteMod: 0
  };
  render() {
    return (
      <div>
        <h4>Likes: {this.props.article.votes + this.state.voteMod}</h4>
        <button
          className="bouton"
          onClick={() => this.showLove(this.props.article._id, "up")}
          disabled={this.state.voteMod === 1}
        >
          Up
        </button>
        <button
          className="bouton"
          onClick={() => this.showLove(this.props.article._id, "down")}
          disabled={this.state.voteMod === -1}
        >
          Down
        </button>
      </div>
    );
  }
  showLove = (id, direction) => {
    api.vote(id, direction).catch(err => {
      this.setState(err);
    });

    this.setState({
      voteMod:
        direction === "up" ? this.state.voteMod + 1 : this.state.voteMod - 1
    });
  };
}
Votes.propTypes = {
  voteMod: PropTypes.number
};
export default Votes;

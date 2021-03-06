import React from "react";
import "../App.css";
import PropTypes from "prop-types";
class Search extends React.Component {
  state = {
    keyword: ""
  };
  render() {
    return (
      <span className="look">
        <input
          className="find"
          type="text"
          placeholder="Search for Article..."
          onChange={this.handleChange}
          value={this.state.keyword}
        />
        <button className="btn" onClick={this.handleClick}>
          Search
        </button>
      </span>
    );
  }
  handleChange = event => {
    const value = event.target.value;
    this.setState({
      keyword: value
    });
  };
  handleClick = () => {
    this.props.articleSearch(this.state.keyword);
    this.setState({
      keyword: ""
    });
  };
}
Search.propTypes = {
  keyword: PropTypes.string
};
export default Search;

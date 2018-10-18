import React from "react";
import "../App.css";
class SearchUser extends React.Component {
  state = {
    keyword: ""
  };
  render() {
    return (
      <span className="look">
        <input
          id="find"
          type="text"
          placeholder="Search for User..."
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
    this.props.UserSearch(this.state.keyword);
    this.setState({
      keyword: ""
    });
  };
}

export default SearchUser;

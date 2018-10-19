import React, { Component } from "react";
import "../App.css";
import Search from "./Search";

class About extends Component {
  render() {
    return (
      <ul>
        <div className="search">
          <Search articleSearch={this.articleSearch} />
        </div>
        <br />
        <div className="title">
          <h2>About</h2>
        </div>
        <div className="row">
          <div className="card">
            <div className="titre">
              <h2>What is this all about?</h2>
            </div>
            <div className="content">
              <p>
                fbwhjefbwkfjcdwj jknfwln ljnfwjwjn dnjdncjwdndwncjldd c<br />
                bw bwhb hwdb hwdb hdjkwdkjwk fwwuewpnkjkldwfmkw
                <br />
                dwiownw dhdh eiowpqwqoeirn vnjnfvmdwm{" "}
              </p>
            </div>
          </div>
        </div>
      </ul>
    );
  }
}

export default About;

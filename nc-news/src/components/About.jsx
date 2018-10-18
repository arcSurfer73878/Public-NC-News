import React, { Component } from "react";
import "../App.css";
import Search from "./Search";

class About extends Component {
  render() {
    return (
      <div>
        <div className="search">
          <Search articleSearch={this.articleSearch} />
        </div>
        <div>
          <p>About</p>
          <div>
            <p>
              fbwhjefbwkfjcdwj jknfwln ljnfwjwjn dnjdncjwdndwncjldd c<br />
              bw bwhb hwdb hwdb hdjkwdkjwk fwwuewpnkjkldwfmkw
              <br />
              dwiownw dhdh eiowpqwqoeirn vnjnfvmdwm{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

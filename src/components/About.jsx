import React, { Component } from "react";
import "../App.css";

class About extends Component {
  render() {
    return (
      <ul>
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
                This is a website made for a Northcoders project.
                <br />
                We are fetching data from an Api made with MongoDb.
                <br />
                And then, using React, we built a front end page using <br />
                class based components or functional components.
                <br />
                <br />
                Have fun navigating those pages!
                <br />
                <br />
                Kaiming
              </p>
            </div>
          </div>
        </div>
      </ul>
    );
  }
}

export default About;

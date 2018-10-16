import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import SideBar from "./components/SideBar";
import { Router } from "@reach/router";
import Topics from "./components/Topics";
import About from "./components/About";
import Users from "./components/Users";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>NC NEWS</h1>
        </header>
        <nav>
          <Nav />
        </nav>
        <section>
          <SideBar />
        </section>
        <Router className="main">
          <Articles path="/" />
          <Topics path="/topics" />
          <About path="/about" />
          <Users path="/users" />
        </Router>
        <footer>
          <p>footer</p>
        </footer>
      </div>
    );
  }
}

export default App;

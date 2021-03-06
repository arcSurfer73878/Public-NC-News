import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import ArticlesUser from "./components/ArticlesUser";
import ArticlePoster from "./components/ArticlePoster";
import MostComments from "./components/MostComments";
import Popular from "./components/Popular";
import SideBar from "./components/SideBar";
import { Router } from "@reach/router";
import Topics from "./components/Topics";
import Article from "./components/Article";
import * as api from "./api";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Users from "./components/Users";

class App extends Component {
  state = {
    user: "",
    articleFilter: null
  };
  render() {
    return (
      <div className="App">
        <header>
          <h1>Northcoders News</h1>
        </header>
        <nav>
          <Nav articleSearch={this.articleSearch} />
        </nav>
        <section>
          <SideBar login={this.login} logout={this.logout} />
        </section>
        <main>
          <Router>
            <Articles path="/" articleFilter={this.props.articleFilter} />
            <Articles path="/topics/:topic" />
            <ArticlesUser path="/users/:username" />
            <ArticlePoster path="/ArticlePoster" user={this.state.user} />
            <MostComments path="/mostcomments" />
            <NotFound path="/error" />
            <NotFound default />
            <Popular path="/popular" />
            <Topics path="/topics" />
            <About path="/about" />
            <Users path="/users" />
            <Article path="/:id" user={this.state.user} />
          </Router>
        </main>

        <footer>
          <p>Powered by React </p>
          <p> A Northcoders Project by Kaiming Shen </p>
        </footer>
      </div>
    );
  }
  articleSearch = keyword => {
    this.setState({ articleFilter: keyword });
  };
  componentDidMount() {
    const user = sessionStorage.getItem("username");
    if (user) {
      this.setState({
        user: JSON.parse(user)
      });
    }
  }

  login = username => {
    api.getUser(username).then(user => {
      sessionStorage.setItem(username, JSON.stringify(user));
      this.setState({
        user
      });
    });
  };
  logout = () => {
    this.setState({
      user: ""
    });
  };
}

export default App;

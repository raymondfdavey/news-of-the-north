import { Router } from "@reach/router";
import Articles from "./COMPONENTS/Articles";
import Nav from "./COMPONENTS/Nav";
import styles from "./App.module.css";
import React, { Component } from "react";
import * as api from "./API/api";
import Header from "./COMPONENTS/Header";
import TopicArticles from "./COMPONENTS/TopicArticles";
import SingleArticlePage from "./COMPONENTS/SingleArticlePage";

class App extends Component {
  state = {
    articles: [],
    topics: [],
    loading: true,
    sortBy: "comment_count",
    orderBy: "desc",
    loggedInUser: null
  };
  render() {
    return (
      <>
        <Header
          logout={this.logout}
          updateUser={this.updateUser}
          loggedInUser={this.state.loggedInUser}
        />
        <div className={styles.mainBody}>
          <Nav
            changeSort={this.changeSort}
            changeOrder={this.changeOrder}
            topics={this.state.topics}
          />
          <Router>
            <Articles
              articles={this.state.articles}
              loading={this.state.loading}
              path="/"
            ></Articles>
            <TopicArticles
              loggedInUser={this.state.loggedInUser}
              changeSort={this.changeSort}
              orderBy={this.state.orderBy}
              sortBy={this.state.sortBy}
              path="/articles/:topic"
            />
            <SingleArticlePage
              loggedInUser={this.state.loggedInUser}
              path="/articles/chooseArticle/:article_id"
            />
          </Router>
        </div>
      </>
    );
  }
  componentDidMount() {
    api.fetchAllTopics().then(topics => {
      const currentTopics = [];
      topics.forEach(topic => {
        currentTopics.push(topic.slug);
      });
      this.setState({ topics: currentTopics });
    });
    api
      .fetchAllArticles(this.state.sortBy, this.state.orderBy)
      .then(articles => {
        this.setState({ articles: articles, loading: false });
      })
      .catch(err => console.log(err));
  }

  changeSort = newSortTerm => {
    console.log(newSortTerm);

    this.setState({ sortBy: newSortTerm });
  };
  changeOrder = newOrderTerm => {
    this.setState({ orderBy: newOrderTerm });
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.sortBy !== this.state.sortBy ||
      prevState.orderBy !== this.state.orderBy
    ) {
      api
        .fetchAllArticles(this.state.sortBy, this.state.orderBy)
        .then(articles => {
          this.setState({ articles: articles, loading: false });
        })
        .catch(err => console.log(err));
    }
  }
  updateUser = username => {
    this.setState({ loggedInUser: username });
  };
  logout = () => {
    this.setState({ loggedInUser: null });
  };
}

export default App;

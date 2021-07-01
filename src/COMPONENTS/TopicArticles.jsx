import React, { Component } from "react";
import Articles from "./Articles";
import * as api from "../API/api";

class TopicArticles extends Component {
  state = {
    articles: [],
    loading: true
  };
  render() {
    return (
      <>
        <Articles
          loading={this.state.loading}
          articles={this.state.articles}
          selectedTopic={this.props.topic}
        />
      </>
    );
  }
  componentDidMount() {
    api
      .fetchArticlesByParam(
        "topic",
        this.props.topic,
        this.props.sortBy,
        this.props.orderBy
      )
      .then(response => this.setState({ articles: response, loading: false }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.sortBy !== this.props.sortBy ||
      prevProps.orderBy !== this.props.orderBy ||
      prevProps.topic !== this.props.topic
    ) {
      api
        .fetchArticlesByParam(
          "topic",
          this.props.topic,
          this.props.sortBy,
          this.props.orderBy
        )
        .then(response =>
          this.setState({ articles: response, loading: false })
        );
    }
  }
}

export default TopicArticles;

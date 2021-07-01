import React, { Component } from "react";

import axios from "axios";
import Comments from "./Comments";
import styles from "./SingleArticlePage.module.css";
import Vote from "./Vote";
import CommentAdder from "./CommentAdder";

class SingleArticlePage extends Component {
  state = {
    article: {},
    articleId: this.props.article_id,
    votes: "",
    updatingVotes: "",
    loading: true,
    viewComments: false
  };
  render() {
    const { article } = this.state;
    return this.state.loading ? (
      <h1>LOADING...</h1>
    ) : (
      <div className={styles.wholeSingleArticlePage}>
        <div className={styles.singleArticleBox}>
          <h1>{article.title}</h1>
          <div className={styles.topRow}>
            <p className={styles.articleText}>{article.body}</p>
          </div>
          <div className={styles.secondRow}>
            <p>
              by <span style={{ color: "#B80C09" }}>{article.author}</span>
            </p>
            <Vote
              changeVotes={this.changeVotes}
              votes={this.state.votes}
              article_id={article.article_id}
              updatingVotes={this.state.votes}
            />
          </div>
          <div className={styles.thirdRow}>
            <p>{new Date(article.created_at).toDateString()}</p>
            <p>
              {" "}
              <span style={{ color: "#B80C09" }}>
                {article.comment_count}
              </span>{" "}
              comments
            </p>
          </div>
          <div className={styles.fourthRow}>
            {!this.state.viewComments ? (
              <p
                className={styles.viewCommentsButton}
                onClick={() => {
                  this.viewCommentsToggle();
                }}
              >
                view comments
              </p>
            ) : (
              <p
                className={styles.viewCommentsButton}
                onClick={() => {
                  this.viewCommentsToggle();
                }}
              >
                hide comments
              </p>
            )}
          </div>
        </div>
        <div className={styles.comments}>
          {this.state.viewComments && (
            <Comments
              viewComments={this.state.viewComments}
              loggedInUser={this.props.loggedInUser}
              id={this.props.article_id}
            />
          )}
        </div>
      </div>
    );
  }
  viewCommentsToggle = () => {
    this.setState({ viewComments: !this.state.viewComments });
  };
  changeVotes = value => {
    const newVoteCount = this.state.votes + +value;
    this.setState({ votes: newVoteCount });
  };

  componentDidMount() {
    axios
      .get(
        "https://nc-news-rfd.herokuapp.com/articles/" + this.props.article_id
      )
      .then(({ data: { article } }) => {
        this.setState({
          article: article,
          votes: article.votes,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ err });
      });
  }
}

export default SingleArticlePage;

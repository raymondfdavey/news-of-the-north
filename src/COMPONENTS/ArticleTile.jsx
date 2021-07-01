import React, { Component } from "react";
import { Link } from "@reach/router";
import styles from "./ArticleTile.module.css";
import Vote from "./Vote";

class ArticleTile extends Component {
  state = { votes: this.props.article.votes };
  render() {
    const { article } = this.props;

    return (
      <div className={styles.articleTile}>
        <div className={styles.topRow}>
          <Link to={`/articles/chooseArticle/${article.article_id}`}>
            <h1>{article.title}</h1>
          </Link>
        </div>
        <div className={styles.secondRow}>
          <h2>
            by <span style={{ color: "#B80C09" }}>{article.author}</span>
          </h2>
          <h2>{new Date(article.created_at).toDateString()}</h2>
        </div>
        <div className={styles.thirdRow}>
          <h2 className={styles[article.topic]}>{article.topic}</h2>
          <Vote
            article_id={article.article_id}
            changeVotes={this.changeVotes}
            votes={article.votes}
            updatingVotes={this.state.votes}
          />
        </div>

        {/* <h2>{article.topic}</h2> */}
        {/* <h2>comments: {article.comment_count}</h2> */}
      </div>
    );
  }
  changeVotes = value => {
    const newVoteCount = this.state.votes + +value;
    this.setState({ votes: newVoteCount });
  };
}

export default ArticleTile;

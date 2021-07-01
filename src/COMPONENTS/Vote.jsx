import React, { Component } from "react";
import * as api from "../API/api";
import ErrorPage from "./ErrorPage";
import styles from "./ArticleTile.module.css";
import up from "../IMGS/up.png";
import down from "../IMGS/down.png";

class Vote extends Component {
  state = { voted: false, err: null };
  render() {
    if (this.state.err) return <ErrorPage err={this.state.err} />;

    return (
      <div className={styles.voteSection}>
        <div className={styles.voteButtons}>
          <img
            alt="thumb up "
            src={up}
            className="upButton"
            value="1"
            disabled={this.state.voted}
            onClick={
              !this.state.voted &&
              (() => {
                this.handleVote("1");
              })
            }
          />
          {/* </button> */}
          <p>
            <span style={{ color: "#B80C09" }}>{this.props.updatingVotes}</span>{" "}
            votes
          </p>
          <img
            alt="thumb down "
            src={down}
            className="upButton"
            value="-1"
            disabled={this.state.voted}
            onClick={
              !this.state.voted &&
              (() => {
                this.handleVote("-1");
              })
            }
          />
        </div>
        {this.state.voted ? "  You have voted!" : null}
      </div>
    );
  }

  handleVote(num) {
    if (this.props.article_id) {
      api
        .articleVotePatch(this.props.article_id, num)
        .catch(err => this.setState({ err: err }));
      this.props.changeVotes(num);
      this.setState({ voted: true });
    }
    if (this.props.comment_id) {
      api
        .commentVotePatch(this.props.comment_id, num)
        .catch(err => this.setState({ err: err }));
      this.props.changeCommentVotes(num);
      this.setState({ voted: true });
    }
  }
}

export default Vote;

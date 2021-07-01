import React, { Component } from "react";
import Vote from "./Vote";
import * as api from "../API/api";
import styles from "./CommentTile.module.css";
class CommentTile extends Component {
  state = { votes: this.props.comment.votes, err: null };
  render() {
    const { comment } = this.props;

    return (
      <div className={styles.commentBox}>
        <div className={styles.topLine}>
          <p>{comment.body}</p>
        </div>
        <div className={styles.secondLine}>
          <p>
            {" "}
            by <span style={{ color: "#B80C09" }}>{comment.author}</span>
          </p>
          <p>{new Date(comment.created_at).toDateString()}</p>
        </div>
        <div className={styles.thirdLine}>
          {this.state.user === comment.author ? (
            <button onClick={() => this.deleteComment(comment.comment_id)}>
              Delete Your Comment
            </button>
          ) : (
            <p> </p>
          )}
          <Vote
            className={styles.votes}
            updatingVotes={this.state.votes}
            comment_id={comment.comment_id}
            changeCommentVotes={this.changeCommentVotes}
          />
        </div>
        <div className={styles.fourthLine}></div>
      </div>
    );
  }

  changeCommentVotes = value => {
    const newVoteCount = this.state.votes + +value;
    this.setState({ votes: newVoteCount });
  };

  deleteComment = comment_id => {
    api
      .deleteCommentFromDatabase(comment_id)
      .then(this.props.removeComment(comment_id))
      .catch(err => this.setState({ err: err }));
  };
}

export default CommentTile;

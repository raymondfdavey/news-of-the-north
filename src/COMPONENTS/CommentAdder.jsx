import React, { Component } from "react";
import * as api from "../API/api";
import ErrorPage from "./ErrorPage";
import styles from "./CommentsAdder.module.css";

class CommentAdder extends Component {
  state = { textInput: "", err: null };

  render() {
    if (this.state.err) return <ErrorPage err={this.state.err} />;
    return (
      <div className={styles.newCommentForm}>
        <form onSubmit={this.postComment}>
          <textarea
            type="text"
            placeholder="enter your comment"
            value={this.state.textInput}
            onChange={this.handleChange}
          ></textarea>
          <button className={styles.button}>submit</button>
        </form>
      </div>
    );
  }
  handleChange = event => {
    this.setState({ textInput: event.target.value });
  };

  postComment = event => {
    console.log(event);

    event.preventDefault();
    api
      .postCommentToDatabase(
        this.props.id,
        this.state.textInput,
        this.props.loggedInUser
      )
      .then(({ data: { comment } }) => this.props.updateComments(comment))
      .then(this.setState({ textInput: "" }))
      .catch(err => this.setState({ err: err }));
  };
}

export default CommentAdder;

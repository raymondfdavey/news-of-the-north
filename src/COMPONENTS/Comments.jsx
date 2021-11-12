import React, { Component } from "react";
import style from "./Comments.module.css";
import axios from "axios";
import CommentTile from "./CommentTile";
import CommentAdder from "./CommentAdder";

class Comments extends Component {
  state = {
    comments: [],
    sortBy: "created_at",
    orderBy: "desc",
    viewComments: false
  };
  render() {
    return (
      <div>
        <div className={style.optionsHolder}>
          {this.props.loggedInUser ? (
            <>
              <p className={style.cursorToLogin}>add your comment below!</p>
              <CommentAdder
                updateComments={this.updateComments}
                id={this.props.id}
                loggedInUser={this.props.loggedInUser}
              />
            </>
          ) : (
            <p
              className={style.cursorToLogin}
              onClick={() => {
                document.getElementById("usernameInput").focus();
              }}
            >
              log in to add a comment{" "}
            </p>
          )}
        </div>
        {this.props.viewComments && (
          <>
            {" "}
            <div className={style.sortOptions}>
              <p
                className={style.viewCommentsButton}
                onClick={this.sortByVotes}
              >
                sort comments by number of votes
              </p>
              <p className={style.viewCommentsButton} onClick={this.sortByDate}>
                sort by date
              </p>
              <p
                className={style.viewCommentsButton}
                onClick={this.changeOrder}
              >
                {this.state.orderBy}
              </p>
            </div>
            {this.state.comments.map(comment => {
              return (
                <CommentTile
                  removeComment={this.removeComment}
                  comment={comment}
                  key={comment.comment_id}
                />
              );
            })}
          </>
        )}
      </div>
    );
  }
  componentDidMount() {
    axios
      .get(
        "https://news-of-the-north-server.herokuapp.com/articles/" +
          this.props.id +
          "/comments?sort_by=created_at"
      )
      .then(({ data: { comments } }) => {
        this.setState({ comments: comments });
      });
  }
  updateComments = comment => {
    this.setState({ comments: [comment, ...this.state.comments] });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.sortBy !== this.state.sortBy ||
      prevState.orderBy !== this.state.orderBy
    ) {
      axios
        .get(
          "https://news-of-the-north-server.herokuapp.com/articles/" +
            this.props.id +
            "/comments?sort_by=" +
            this.state.sortBy +
            "&order=" +
            this.state.orderBy
        )
        .then(({ data: { comments } }) => {
          this.setState({
            comments: comments
          });
        });
    }
  }

  sortByVotes = () => {
    this.setState({ sortBy: "votes" });
  };

  sortByDate = () => {
    this.setState({ sortBy: "created_at" });
  };

  changeOrder = () => {
    if (this.state.orderBy === "asc") {
      this.setState({ orderBy: "desc" });
    }
    if (this.state.orderBy === "desc") {
      this.setState({ orderBy: "asc" });
    }
  };

  removeComment = deletedComment_id => {
    this.setState(currentState => {
      const newComments = currentState.comments.filter(comment => {
        return comment.comment_id !== deletedComment_id;
      });
      return { comments: newComments };
    });
  };

  viewCommentsToggle = () => {
    this.setState({ viewComments: !this.state.viewComments });
  };
}

export default Comments;

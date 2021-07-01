import React, { Component } from "react";
import styles from "./LoginBlock.module.css";

class LoginBlock extends Component {
  state = { username: "" };
  render() {
    return (
      <div className={styles.wholeLoginBox}>
        {this.props.loggedInUser ? (
          <div className={styles.loggedInBox}>
            {" "}
            <p className={styles.loggedInText}>
              logged in as{" "}
              <span style={{ color: "#B80C09" }}>
                {this.props.loggedInUser}
              </span>
            </p>
            <button className={styles.button} onClick={this.props.logout}>
              logout
            </button>
          </div>
        ) : (
          <div className={styles.notLoggedBox}>
            <p>not logged in </p>
            <form onSubmit={this.handleSubmit}>
              <label>
                Username:
                <input
                  type="text"
                  name=""
                  id="usernameInput"
                  onChange={this.handleChange}
                  value={this.state.username}
                />
              </label>
              <button
                className={styles.button}
                onClick={() => this.handleSumbmit}
              >
                Log In
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
  handleChange = event => {
    this.setState({ username: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.updateUser(this.state.username);
    this.setState({ username: "" });
  };
}

export default LoginBlock;

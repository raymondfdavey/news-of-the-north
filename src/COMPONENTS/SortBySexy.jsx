import React, { Component } from "react";
import styles from "./SortBySexy.module.css";

class SortBySexy extends Component {
  state = {
    open: false,
    selected: "comment_count"
  };
  render() {
    return (
      <div
        className={
          this.state.open
            ? styles.dropperContainerOpen
            : styles.dropperContainer
        }
      >
        <div onClick={() => this.toggleDropdown()}>
          <h1>
            Sort Articles{" "}
            {this.state.open ? (
              <i class="arrow up"></i>
            ) : (
              <i class="arrow down"></i>
            )}
          </h1>
        </div>
        {this.state.open && (
          <ul
            className={
              this.state.open ? styles.dropdownListOpen : styles.dropdownList
            }
          >
            <li
              className={
                this.state.selected === "comment_count"
                  ? styles.selected
                  : styles.dropdownListItemOpen
              }
              onClick={evt => {
                this.props.changeSort("comment_count");
                this.setSelected("comment_count");
              }}
              key={"comment_count"}
            >
              number of comments
            </li>
            <li
              className={
                this.state.selected === "created_at"
                  ? styles.selected
                  : styles.dropdownListItemOpen
              }
              onClick={evt => {
                this.props.changeSort("created_at");
                this.setSelected("created_at");
              }}
              key={"created_at"}
            >
              time created
            </li>{" "}
            <li
              className={
                this.state.selected === "votes"
                  ? styles.selected
                  : styles.dropdownListItemOpen
              }
              onClick={evt => {
                this.props.changeSort("votes");
                this.setSelected("votes");
              }}
              key={"votes"}
            >
              number of votes
            </li>
          </ul>
        )}
      </div>
    );
  }
  setSelected = value => {
    this.setState({ selected: value });
  };
  toggleDropdown() {
    console.log("Hello");

    this.setState({
      open: !this.state.open
    });
  }
}
export default SortBySexy;

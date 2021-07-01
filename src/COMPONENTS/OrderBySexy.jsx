import React, { Component } from "react";
import styles from "./OrderBySexy.module.css";

class OrderBySexy extends Component {
  state = {
    open: false,
    selected: "desc"
  };
  render() {
    return (
      <div
        className={
          this.state.open
            ? styles.dropperContainerOpen
            : styles.dropperContainer
        }
        className={
          this.state.open
            ? styles.dropperContainerOpen
            : styles.dropperContainer
        }
      >
        <div onClick={() => this.toggleDropdown()}>
          <h1>
            Order Articles{" "}
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
                this.state.selected === "asc"
                  ? styles.selected
                  : styles.dropdownListItemOpen
              }
              onClick={evt => {
                this.props.changeOrder("asc");
                this.setSelected("asc");
              }}
              key={"ascending"}
            >
              ascending order
            </li>
            <li
              className={
                this.state.selected === "desc"
                  ? styles.selected
                  : styles.dropdownListItemOpen
              }
              onClick={evt => {
                this.props.changeOrder("desc");
                this.setSelected("desc");
              }}
              key={"descending"}
            >
              descending order
            </li>{" "}
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

export default OrderBySexy;

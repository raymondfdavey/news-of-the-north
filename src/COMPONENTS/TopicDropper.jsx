import React, { Component } from "react";
import { Link } from "@reach/router";
import styles from "./TopicDropper.module.css";

class TopicDropper extends Component {
  state = { open: false, selected: "" };
  render() {
    return (
      <div
        className={
          this.state.open
            ? styles.dropperContainerOpen
            : styles.dropperContainer
        }
      >
        <div
          className={
            this.state.open ? styles.dropdownTitleOpen : styles.dropdownTitle
          }
          onClick={() => this.toggleDropdown()}
        >
          <h1>
            Topics{" "}
            {this.state.open ? (
              <i class="arrow up"></i>
            ) : (
              <i class="arrow down"></i>
            )}
          </h1>{" "}
        </div>
        {this.state.open && (
          <ul
            className={
              this.state.open ? styles.dropdownListOpen : styles.dropdownList
            }
          >
            {this.props.topics.map(topic => {
              return (
                <li
                  className={
                    this.state.selected === topic
                      ? styles.selected
                      : styles.dropdownListItemOpen
                  }
                  key={topic}
                >
                  <Link
                    id={topic}
                    onClick={e => this.setSelected(e)}
                    to={`articles/${topic}`}
                  >
                    {topic}{" "}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }

  setSelected = e => {
    this.setState({ selected: e.target.id });
  };
  toggleDropdown() {
    this.setState({
      open: !this.state.open
    });
  }
}

export default TopicDropper;

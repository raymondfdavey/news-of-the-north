import React, { Component } from "react";
import { Link } from "@reach/router";
import style from "./Nav.module.css";
import SortBySexy from "./SortBySexy";
import OrderBySexy from "./OrderBySexy";
import TopicDropper from "./TopicDropper";

class Nav extends Component {
  render() {
    return (
      <div className={style.sideBar}>
        <Link to="/">
          <h1 className={style.allArticles}>View All Articles</h1>
        </Link>
        <TopicDropper topics={this.props.topics} />
        <SortBySexy changeSort={this.props.changeSort} />
        <OrderBySexy changeOrder={this.props.changeOrder} />
      </div>
    );
  }
}

export default Nav;

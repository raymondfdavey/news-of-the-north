import React from "react";
import styles from "./Header.module.css";
import LoginBlock from "./LoginBlock";

function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <h1 className={styles.bannerHead}>
          <span style={{ color: "#B80C09" }}>N</span>EWS of the{" "}
          <span style={{ color: "#B80C09" }}>N</span>ORTH
        </h1>
        <LoginBlock
          logout={props.logout}
          loggedInUser={props.loggedInUser}
          updateUser={props.updateUser}
        />
      </div>
      <p className={styles.tagLine}>talk about what matters</p>
    </header>
  );
}

export default Header;

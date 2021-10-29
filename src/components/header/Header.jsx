import React from "react";
import styles from "./header/module.css";

const Header = () => {
  return (<div className={styles.main}>
    <h1>Title Example</h1>
    <h2 className={styles.subtitle}></h2>
  </div>)
}


export default Header;
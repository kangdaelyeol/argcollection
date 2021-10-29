import React from "react";
import styles from "./result.module.css";
const Result = ({resultArr}) => {
  return (<div className={styles.main}>
    {resultArr ? resultArr.map(e => {
      return(<div className={styles.entity}>
        {e}
      </div>)
    }) : ""
  }
  </div>)
}

export default Result;
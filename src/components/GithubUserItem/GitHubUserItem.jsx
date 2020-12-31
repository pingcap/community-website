import React from "react";
import styles from "./GitHubUserItem.module.scss";
import BoundLink from "src/components/BoundLink";

export default function GitHubUserItem({githubName, level}) {
  return (
    <div className={styles.item}>
      <div className={styles.item_icon}>
        <img src={`https://github.com/${githubName}.png`} alt={githubName}/>
        {/*<div style={{width: 200, height: 200, backgroundColor: 'lightgray', margin: '0 auto'}}>avatar - {githubName}</div>*/}
      </div>
      <div className={styles.item_name}>
        <BoundLink href={`https://github.com/${githubName}`}>{githubName}</BoundLink>
      </div>
      <div className={styles.item_level}>
        {level}
      </div>
    </div>
  )
}

import React from "react";
import styles from "./GitHubUserItem.module.scss";
import BoundLink from "src/components/BoundLink";
import {convertToUpperCamelCase} from 'src/helper'

export default function GitHubUserItem({githubName, level, sigName, community}) {
  return (
    <div className={styles.item}>
      <div className={styles.item_icon}>
        <BoundLink href={`https://github.com/${githubName}`}>
          <img src={`https://github.com/${githubName}.png`} alt={githubName}/>
        </BoundLink>
      </div>
      <div className={styles.item_name}>
        <BoundLink href={`https://github.com/${githubName}`}>
          {githubName}
        </BoundLink>
      </div>
      <div className={styles.item_level}>
        {convertToUpperCamelCase(level)} {(sigName || community) && ('@' + (sigName || community))}
      </div>
    </div>
  )
}

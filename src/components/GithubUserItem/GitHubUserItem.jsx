import React from "react";
import styles from "./GitHubUserItem.module.scss";
import BoundLink from "src/components/BoundLink";
import {convertToUpperCamelCase} from 'src/helper'

export default function GitHubUserItem({githubName, level, sigName, community}) {
  // const avatarUrl = require(`../../../cache/github-avatar/${githubName}.png`)
  const avatarUrl = `/cache/github-avatar/${githubName}.png`
  return (
    <div className={styles.item}>
      <div className={styles.item_icon}>
        <BoundLink href={`https://github.com/${githubName}`}>
          <img src={avatarUrl} alt={githubName}/>
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

import React from 'react';
import _ from 'lodash';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import styles from './GitHubUserItem.module.scss';
import BoundLink from 'src/components/BoundLink';

export default function GitHubUserItem({ githubName, level, sigName, community }) {
  const avatarUrl = `/cache/github-avatar/${githubName}.png`;

  return (
    <div className={styles.item}>
      <div className={styles.item_icon}>
        <BoundLink href={`https://github.com/${githubName}`}>
          <LazyLoadImage alt={githubName} src={avatarUrl} />
        </BoundLink>
      </div>
      <div className={styles.item_name}>
        <BoundLink href={`https://github.com/${githubName}`}>{githubName}</BoundLink>
      </div>
      <div className={styles.item_level}>
        {_.startCase(level)} {(sigName || community) && '@' + (sigName || community)}
      </div>
    </div>
  );
}

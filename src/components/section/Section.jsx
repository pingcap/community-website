import React from 'react';
import classnames from 'classnames';

import styles from './Section.module.scss'

export default function Section({className, name, children}) {
  return (
    <div className={classnames(styles.wrapper, className)}>
      <h2>{name}</h2>
      <article>
        {children}
      </article>
    </div>
  )
}

import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Link from 'src/components/IntlLink'
import styles from './linkWithArrow.module.scss'

const LinkWithArrow = ({ to, children, isOutbound }) => {
  return (
    <>
      {isOutbound ? (
        <a
          className={styles.link_with_arrow}
          rel="noopener noreferrer"
          href={to}
          target="_blank"
        >
          <ArrowForwardIcon /> <span>{children}</span>
        </a>
      ) : (
        <Link className={styles.link_with_arrow} to={to}>
          <ArrowForwardIcon /> <span>{children}</span>
        </Link>
      )}
    </>
  )
}

export default LinkWithArrow

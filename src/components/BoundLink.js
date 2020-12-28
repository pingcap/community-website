import React from 'react'
import Link from './IntlLink'

const BoundLink = ({ to, href, children, ...rest }) => {
  return href ? (
    <a {...rest} href={href} target="_blank" rel="noreferrer noopener">
      {children}
    </a>
  ) : (
    <Link {...rest} to={to}>
      {children}
    </Link>
  )
}

export default BoundLink

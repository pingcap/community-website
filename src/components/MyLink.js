import React from 'react'
import {Link} from 'gatsby'

export default function MyLink({ to, href, children, ...rest }) {
  return href ? (
    <a {...rest} href={href} target="_blank" rel="noreferrer noopener">
      {children}
    </a>
  ) : (
    <Link {...rest} href={to}>
      {children}
    </Link>
  )
}

import React from "react";
import './Container.scss'

export default function Container({children, className, ...rest}) {
  return (
    <div className={`pingcap-container ${className}`} {...rest}>
      {children}
    </div>
  )
}

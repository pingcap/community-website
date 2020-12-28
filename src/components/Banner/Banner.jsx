import React from "react";
import './Banner.scss'
import Container from "src/components/Container/Container";

export default function Banner({backgroundImage, children, ...rest}) {
  return (
    <div className="Banner" style={{backgroundImage: `url('${backgroundImage}')`}}>
      <Container {...rest}>
        {children}
      </Container>
    </div>
  )
}

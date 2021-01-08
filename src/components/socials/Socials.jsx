import React, { useEffect, useState } from 'react'
import { followSocials, shareSocials } from 'src/data/socials'
import './Socials.scss'
import {Row, Col} from "antd";

const Socials = ({type, title }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    setData(
      type === 'follow'
        ? followSocials
        : type === 'share'
        ? shareSocials(window.location.href, title)
        : followSocials
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const className = `Socials`
  const classNameItem = `${className}-item`
  
  return (
    <div className={className}>
      <Row gutter={[24, 16]}>
        {data && data.map(social => (
          <Col span={8}>
            <a
              key={social.name}
              className={classNameItem}
              target="_blank"
              rel="noopener noreferrer"
              href={social.href}
            >
              {social.icon}
            </a>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Socials

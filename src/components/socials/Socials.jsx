import React, { useEffect, useState } from 'react'
import { followSocials, shareSocials } from 'src/data/socials'

import './Socials.scss'

import PropTypes from 'prop-types'
import {Row, Col} from "antd";

const Socials = ({ className, type, title }) => {
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

  return (
    <div className="socials">
      <Row gutter={[32]}>
        {data &&
        data.map(social => (
          <Col span={8}>
            <a
              key={social.name}
              className="socials-item"
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

Socials.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
}

export default Socials

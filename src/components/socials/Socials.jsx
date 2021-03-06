import React, { useEffect, useState } from 'react'
import { followSocials, shareSocials } from 'src/data/socials'
import styles from './Socials.module.scss'
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
  
  return (
    <div className={styles.wrapper}>
      <Row gutter={[24, 16]}>
        {data && data.map(social =>
          <Col span={8}>
            <a
              key={social.name}
              className={styles.item}
              target="_blank"
              rel="noopener noreferrer"
              href={social.href}
            >
              <div className={styles[social.name]}/>
            </a>
          </Col>)}
      </Row>
    </div>
  )
}

export default Socials

import React from 'react'
import styles from './IndexIntro.module.scss'
import {Row, Col} from "antd";
import Container from "src/components/Container/Container";

export default function IndexIntro({data}) {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.title}>
          {data.title}
        </div>
        <Row justify="space-around">
          <Col span={16}>
            <div className={styles.summary}>
              {data.summary}
            </div>
          </Col>
        </Row>
        <div className={styles.list}>
          <Row justify="space-around" gutter={[32, 32]}>
            {data.items.map((item =>
                <Col xs={16} sm={16} md={4}>
                  <IndexIntroFeature {...item} />
                </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  )
}

function IndexIntroFeature({imageUrl, summary}) {
  return (
    <div className={styles.list_item}>
      <div className={styles.list_item_image}>
        <img src={imageUrl} alt=""/>
      </div>
      <div className={styles.list_item_text}>
        {summary}
      </div>
    </div>
  )
}

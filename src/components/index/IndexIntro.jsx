import React from 'react'
import styles from './IndexIntro.module.scss'
import {Row, Col} from "antd";
import Container from "src/components/Container/Container";
import {useStaticQuery, graphql} from 'gatsby';

export default function IndexIntro({data}) {
  const imageData = useStaticQuery(
    graphql`
      query {
        communityValue1: file(relativePath: { eq: "home/community-value-1.svg" }) {
          publicURL
        }
        communityValue2: file(relativePath: { eq: "home/community-value-2.svg" }) {
          publicURL
        }
        communityValue3: file(relativePath: { eq: "home/community-value-3.svg" }) {
          publicURL
        }
        communityValue4: file(relativePath: { eq: "home/community-value-4.svg" }) {
          publicURL
        }
      }
    `
  )
  
  data.items.forEach((item, index) => {
    data.items[index].imageUrl = imageData[`communityValue${index + 1}`].publicURL
  })
  
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.title}>
          {data.title}
        </div>
        <Row justify="space-around">
          <Col sm={24} md={20}>
            <div className={styles.summary}>
              {data.summary}
            </div>
          </Col>
        </Row>
        <div className={styles.list}>
          <Row justify="space-around" gutter={[32, 32]}>
            {data.items.map((item =>
              <Col xs={16} sm={16} md={6}>
                <IndexIntroFeature {...item} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  )
}

function IndexIntroFeature({imageUrl, title, summary}) {
  return (
    <div className={styles.list_item}>
      <div className={styles.list_item_image}>
        <img src={imageUrl} alt=""/>
      </div>
      <div className={styles.list_item_title}>
        {title}
      </div>
      <div className={styles.list_item_summary}>
        {summary}
      </div>
    </div>
  )
}

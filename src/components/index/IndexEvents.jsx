import React from 'react'
import styles from './IndexEvents.module.scss'
import {Col, Row} from "antd";
import LinkWithArrow from "src/components/LinkWithArrow";
import EventsItem from "src/components/EventsItem/EventsItem";
import Container from "src/components/Container/Container";
import {graphql, useStaticQuery} from "gatsby";

export default function IndexEvents({data}) {
  const imageData = useStaticQuery(
    graphql`
      query {
        event1: file(relativePath: { eq: "home/event-high-performance-tidb-challenge.svg" }) {
          publicURL
        }
        event2: file(relativePath: { eq: "home/event-tidb-hackathon2020.svg" }) {
          publicURL
        }
        event3: file(relativePath: { eq: "home/event-pingcap-infra-meetup.svg" }) {
          publicURL
        }
      }
    `
  )
  
  data.items.forEach((item, index) => {
    data.items[index].imageUrl = imageData[Object.keys(imageData)[index]].publicURL
  })
  
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.title}>
          {data.title}
        </div>
        <div className={styles.list}>
          <Row justify="center" gutter={[32, 32]}>
            {data.items.map((item =>
                <Col xs={24} sm={16} md={16} lg={8}>
                  <EventsItem {...item} />
                </Col>
            ))}
          </Row>
        </div>
        <div className={styles.more}>
          <LinkWithArrow to="/events" isOutbound={false}>
            VIEW MORE
          </LinkWithArrow>
        </div>
      </Container>
    </div>
  )
}

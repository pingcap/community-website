import React from 'react'
import styles from './IndexEvents.module.scss'
import {Col, Row} from "antd";
import LinkWithArrow from "src/components/LinkWithArrow";
import EventsItem from "src/components/EventsItem/EventsItem";
import Container from "src/components/Container/Container";

export default function IndexEvents({data}) {
  
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.title}>
          {data.title}
        </div>
        <div className={styles.list}>
          <Row justify="space-around" gutter={[32, 32]}>
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

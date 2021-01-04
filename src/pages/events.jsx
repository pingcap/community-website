import React from 'react';
import styles from './events.module.scss'
import i18n from 'src/data/home'
import Layout from "src/components/Layout";
import SEO from "src/components/SEO";
import {useIntl} from "react-intl";
import {Row, Col} from "antd";
import EventsItem from "src/components/EventsItem/EventsItem";
import Banner from "src/components/Banner/Banner";
import Container from "src/components/Container/Container";
import {graphql, useStaticQuery} from "gatsby";

export default function Events() {
  const intl = useIntl()
  const locale = intl.locale
  const data = i18n[locale].events
  
  const imageData = useStaticQuery(
    graphql`
      query {
        banner: file(relativePath: { eq: "banner-events@2x.png" }) {
          publicURL
        }
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
    data.items[index].imageUrl = imageData[`event${index + 1}`].publicURL
  })
  
  return (
    <Layout>
      <SEO
        title="Events"
        description="Connect with the TiDB DevGroup at conferences, meetups, and hackathons."
      />
      
      <Banner backgroundImage={imageData.banner.publicURL}>
        <h1 className={styles.title}>Community Events</h1>
      </Banner>
      
      <div className={styles.wrapper}>
        <Container className={styles.container}>
          <div className={styles.list}>
            <Row justify="center" gutter={[32, 32]}>
              {data.items.map((item =>
                <Col xs={24} sm={16} md={16} lg={8}>
                  <EventsItem {...item} />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </Layout>
  );
}

import React from 'react'
import styles from './IndexBanner.module.scss'
import Button from "src/components/Button";
import {graphql, Link, useStaticQuery} from "gatsby";
import Container from "src/components/Container/Container";

export default function IndexBanner({data}) {
  const imageData = useStaticQuery(
    graphql`
      query {
        slack: file(relativePath: { eq: "home/button-icon-slack.svg" }) {
          publicURL
        }
        sub: file(relativePath: { eq: "home/button-icon-sub.svg" }) {
          publicURL
        }
      }
    `
  )
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.slogan}>
          {data.title}
        </div>
        <div className={styles.subslogan}>
          {data.summary}
        </div>
        <div className={styles.data}>
          <IndexBannerDataItem
            name="Watch"
            number="1.4 K"
          />
          <IndexBannerDataItem
            name="Star"
            number="26.1 K"
          />
          <IndexBannerDataItem
            name="Fork"
            number="4.1 K"
          />
          <IndexBannerDataItem
            name="Contributor"
            number="1.2 K"
          />
        </div>
        <div className={styles.buttons}>
          <Button
            className={styles.join_slack}
            icon={<img src={imageData.slack.publicURL} alt="slack"/>}
            type="ghost"
            as={Link}
            href="https://slack.tidb.io"
          >
            Join Slack
          </Button>
          <Button
            className={styles.subscribe_email}
            icon={<img src={imageData.sub.publicURL} alt="subgroups"/>}
            as={Link}
            href="https://lists.tidb.io/g/main/subgroups"
          >
            Subscribe
          </Button>
        </div>
      </Container>
    </div>
  )
}

function IndexBannerDataItem({name, number}) {
  return (
    <div className={styles.data_item}>
      <div className={styles.data_item_name}>
        {name}
      </div>
      <div className={styles.data_item_number}>
        {number}
      </div>
    </div>
  )
}

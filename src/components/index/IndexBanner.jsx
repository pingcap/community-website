import React from 'react'
import styles from './IndexBanner.module.scss'
import Button from "src/components/Button";
import {ForumOutlined, EmailOutlined} from "@material-ui/icons";
import {Link} from "gatsby";
import Container from "src/components/Container/Container";

export default function IndexBanner({data}) {
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
            icon={<ForumOutlined/>}
            type="ghost"
            as={Link}
            href="https://slack.tidb.io"
          >
            Join Slack
          </Button>
          <Button
            className={styles.subscribe_email}
            icon={<EmailOutlined/>}
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

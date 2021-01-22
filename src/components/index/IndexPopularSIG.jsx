import React from 'react'
import styles from './IndexPopularSIG.module.scss'
import {Col} from 'antd'
import LinkWithArrow from "src/components/LinkWithArrow";
import Container from "src/components/Container/Container";
import AvatarGrid from "src/components/AvatarGrid/AvatarGrid";
import BoundLink from "src/components/BoundLink";
import ResponsiveRow from "src/components/ResponsiveRow/ResponsiveRow";

export default function IndexPopularSIG({data}) {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.title}>
          {data.title}
        </div>
        <div className={styles.summary}>
          {data.summary}
        </div>
        <div className={styles.list}>
          <ResponsiveRow justify="space-around" gutter={[32, 32]}>
            {data.items.map(item =>
              <Col xs={24} sm={16} md={16} lg={6}>
                <IndexPopularSIGItem {...item} />
              </Col>
            )}
          </ResponsiveRow>
        </div>
        <div className={styles.more}>
          <div className={styles.more_button}>
            <LinkWithArrow to="/SIG" isOutbound={false}>
              VIEW MORE
            </LinkWithArrow>
          </div>
        </div>
      </Container>
    </div>
  )
}

function IndexPopularSIGItem({title, summary, sigSubMemberNames}) {
  return (
    <BoundLink to={`/SIG/${title}`}>
      <div className={styles.list_item}>
        <div className={styles.list_item_top}>
          <div className={styles.list_item_top_image}>
            <AvatarGrid members={sigSubMemberNames}/>
          </div>
          <div className={styles.list_item_top_title}>
            {title}
          </div>
        </div>
        <div className={styles.split_line}>
          <div/>
        </div>
        <div className={styles.list_item_bottom}>
          <div className={styles.list_item_summary}>
            {summary}
          </div>
        </div>
      </div>
    </BoundLink>
  )
}

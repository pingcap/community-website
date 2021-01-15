import React from 'react'
import styles from './IndexPopularSIG.module.scss'
import {Row, Col} from 'antd'
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
          <ResponsiveRow justify="space-around" gutter={[0, 32]}>
            {data.items.map(item =>
              <Col xs={24} sm={16} md={16} lg={8}>
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
    <div className={styles.list_item}>
      <BoundLink href={`/SIG/${title}`}>
        <div className={styles.list_item_image}>
          <AvatarGrid members={sigSubMemberNames}/>
        </div>
      </BoundLink>
      <BoundLink href={`/SIG/${title}`}>
        <div className={styles.list_item_title}>
          {title}
        </div>
      </BoundLink>
      <div className={styles.list_item_summary}>
        {summary}
      </div>
    </div>
  )
}

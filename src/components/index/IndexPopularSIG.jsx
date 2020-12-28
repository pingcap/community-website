import React from 'react'
import styles from './IndexPopularSIG.module.scss'
import {Row, Col} from 'antd'
import classNames from "classnames";
import LinkWithArrow from "src/components/LinkWithArrow";

export default function IndexPopularSIG({data}) {
  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.container, "container")}>
        <div className={styles.title}>
          {data.title}
        </div>
        <div className={styles.summary}>
          {data.summary}
        </div>
        <div className={styles.list}>
          <Row justify="center" gutter={[32, 32]}>
            {data.items.map(item =>
              <Col xs={24} sm={16} md={16} lg={8}>
                <IndexPopularSIGItem {...item}/>
              </Col>
            )}
          </Row>
        </div>
        <div className={styles.more}>
          <div className={styles.more_button}>
            <LinkWithArrow to="/SIG" isOutbound={false}>
              VIEW MORE
            </LinkWithArrow>
          </div>
        </div>
      </div>
    </div>
  )
}

function IndexPopularSIGItem({imageUrl, title, summary}) {
  return (
    <div className={styles.list_item}>
      <div className={styles.list_item_image}>
        <img src={imageUrl} alt={title}/>
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

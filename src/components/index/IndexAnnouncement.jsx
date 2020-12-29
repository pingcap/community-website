import React from 'react'
import styles from './IndexAnnouncement.module.scss'
import Container from "src/components/Container/Container";
import PromotionBar from "src/components/PromotionBar/PromotionBar";

export default function IndexAnnouncement({data}) {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.text}>
          <div className={styles.title}>
            <img src="/images/home/campaign-icon.svg" alt="Announcement"/>
          </div>
          <div className={styles.content}>
            <PromotionBar data={data} vertical duration={5} />
          </div>
        </div>
        {/*<div className={styles.pagination}>*/}
        {/*  pagination*/}
        {/*</div>*/}
      </Container>
    </div>
  )
}

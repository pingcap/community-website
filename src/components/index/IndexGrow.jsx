import React from 'react'
import styles from './IndexGrow.module.scss'
import Container from "src/components/Container/Container";

export default function IndexGrow({data}) {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.title}>
          {data.title}
        </div>
        <div className={styles.step}>
          {data.items.map((item, index) =>
            <>
              <IndexGrowStep {...item} />
              {
                index < data.items.length - 1 &&
                <div className={styles.step_arrow}>
                  <img src="/images/home/grow-arrow.svg" alt=">"/>
                </div>
              }
            </>
          )}
        </div>
        
      </Container>
    </div>
  )
}

function IndexGrowStep({imageUrl, step, title, summary}) {
  return (
    <div className={styles.step_item}>
      <div className={styles.step_item_image}>
        <img src={imageUrl} alt=""/>
      </div>
      <div className={styles.step_item_index}>
        STEP {step}
      </div>
      <div className={styles.step_item_title}>
        {title}
      </div>
    </div>
  )
}

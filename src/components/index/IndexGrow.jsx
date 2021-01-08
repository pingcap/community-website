import React from 'react'
import styles from './IndexGrow.module.scss'
import Container from "src/components/Container/Container";
import {graphql, useStaticQuery} from "gatsby";
import BoundLink from "src/components/BoundLink";

export default function IndexGrow({data}) {
  const imageData = useStaticQuery(
    graphql`
      query {
        growArrow: file(relativePath: { eq: "home/grow-arrow.svg" }) {
          publicURL
        }
        growStep1: file(relativePath: { eq: "home/grow-step-1.svg" }) {
          publicURL
        }
        growStep2: file(relativePath: { eq: "home/grow-step-2.svg" }) {
          publicURL
        }
        growStep3: file(relativePath: { eq: "home/grow-step-3.svg" }) {
          publicURL
        }
        growStep4: file(relativePath: { eq: "home/grow-step-4.svg" }) {
          publicURL
        }
        growStep5: file(relativePath: { eq: "home/grow-step-5.svg" }) {
          publicURL
        }
      }
    `
  )
  
  data.items.forEach((item, index) => {
    data.items[index].imageUrl = imageData[`growStep${index + 1}`].publicURL
  })
  
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
                  <img src={imageData.growArrow.publicURL} alt=">"/>
                </div>
              }
            </>
          )}
        </div>
        
      </Container>
    </div>
  )
}

function IndexGrowStep({imageUrl, step, title, urlPath}) {
  return (
    <BoundLink to={`/people/${urlPath}`}>
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
    </BoundLink>
  )
}

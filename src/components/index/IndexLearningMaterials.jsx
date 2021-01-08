import React from 'react'
import styles from './IndexLearningMaterials.module.scss'
import {Row, Col} from "antd";
import Container from "src/components/Container/Container";
import BoundLink from "src/components/BoundLink";

export default function IndexLearningMaterials({data}) {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.title}>
          {data.title}
        </div>
        <div className={styles.list}>
          <Row gutter={[32, 32]}>
            {data.items.map(item =>
              <Col sm={24} xs={24} md={24} lg={12}>
                <LearningItem {...item} />
              </Col>
            )}
          </Row>
        </div>
        
      </Container>
    </div>
  )
}

function LearningItem({title, summary, link}) {
  return (
    <BoundLink href={link}>
      <div className={styles.list_item}>
        <div className={styles.list_item_title}>
          {title}
        </div>
        <div className={styles.list_item_split_line}>
          <div/>
        </div>
        <div className={styles.list_item_summary}>
          {summary}
        </div>
      </div>
    </BoundLink>
  )
}

// function IndexLibraryItem({imageUrl, title, summary}) {
//   return (
//     <div className="list-item">
//       <div className="list-item-title">
//         {title}
//       </div>
//       <div className="list-item-summary">
//         {summary}
//       </div>
//     </div>
//   )
// }

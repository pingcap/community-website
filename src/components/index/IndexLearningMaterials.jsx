import React from 'react'
import styles from './IndexLearningMaterials.module.scss'
import {Row, Col} from "antd";
import classNames from "classnames";

export default function IndexLearningMaterials({data}) {
  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.container, 'container')}>
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
        
      </div>
    </div>
  )
}

function LearningItem({title, summary}) {
  return (
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

import React from 'react'
import styles from './IndexCommunityStar.module.scss'
import {Row, Col} from "antd";
import Container from "src/components/Container/Container"
import BoundLink from "src/components/BoundLink";

export default function IndexCommunityStar({data}) {
  
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.title}>
          {data.title}
        </div>
        <Row justify="space-around">
          <Col sm={24} md={20}>
            <div className={styles.summary}>
              {data.summary}
            </div>
          </Col>
        </Row>
        <div className={styles.list}>
          <Row justify="space-around" gutter={[32, 32]}>
            {data.items.map(((item, index) =>
                <Col xs={24} sm={12} md={4}
                  // onMouseOver={() => setOpinionDebounced.run(index)}
                  // onMouseOut={() => setOpinionDebounced.run(-1)}
                >
                  <IndexCommunityStarItem {...item} />
                </Col>
            ))}
          </Row>
        </div>
        
      </Container>
    </div>
  )
}

function IndexCommunityStarItem({githubName}) {
  const avatarUrl = `/cache/github-avatar/${githubName}.png`
  return (
    <div className={styles.list_item}>
      <BoundLink href={`https://github.com/${githubName}`}>
        <div className={styles.list_item_image}>
          <img src={avatarUrl} alt=""/>
        </div>
      </BoundLink>
      <BoundLink href={`https://github.com/${githubName}`}>
        <div className={styles.list_item_name}>
          {githubName}
        </div>
      </BoundLink>
    </div>
  )
}

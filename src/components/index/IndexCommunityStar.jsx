import React from 'react'
import styles from './IndexCommunityStar.module.scss'
import {Col} from "antd";
import Container from "src/components/Container/Container"
import BoundLink from "src/components/BoundLink";
import ResponsiveRow from "src/components/ResponsiveRow/ResponsiveRow";

export default function IndexCommunityStar({data}) {
  
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
          <ResponsiveRow justify="space-around" gutter={[0, 64]}>
            {data.items.map(((item, index) =>
              <Col key={index} xs={20} sm={6}
                // onMouseOver={() => setOpinionDebounced.run(index)}
                // onMouseOut={() => setOpinionDebounced.run(-1)}
              >
                <IndexCommunityStarItem {...item} />
              </Col>
            ))}
          </ResponsiveRow>
        </div>
        
      </Container>
    </div>
  )
}

function IndexCommunityStarItem({githubName, level}) {
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
        <div className={styles.list_item_level}>
          {level}
        </div>
      </BoundLink>
    </div>
  )
}

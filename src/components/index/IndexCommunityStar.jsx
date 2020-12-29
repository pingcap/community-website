import React, {useState} from 'react'
import styles from './IndexCommunityStar.module.scss'
import {Row, Col} from "antd";
import classNames from "classnames";
import {useDebounceFn} from 'ahooks'
import LinkWithArrow from "src/components/LinkWithArrow";
import Container from "src/components/Container/Container";
import {graphql, useStaticQuery} from "gatsby";

export default function IndexCommunityStar({data}) {
  const [opinionIndex, setOpinionIndex] = useState(-1);
  const setOpinionDebounced = useDebounceFn(
    setOpinionIndex,
    {wait: 500},
  );
  
  const imageData = useStaticQuery(
    graphql`
      query {
        star: file(relativePath: { eq: "home/star-icon.svg" }) {
          publicURL
        }
      }
    `
  )
  
  data.items.forEach((item, index) => {
    data.items[index].imageUrl = imageData.star.publicURL
  })
  
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.title}>
          {data.title}
        </div>
        <Row justify="space-around">
          <Col sm={24} md={16}>
            <div className={styles.summary}>
              {data.summary}
            </div>
          </Col>
        </Row>
        <div className={styles.list}>
          <Row justify="space-between" gutter={[32, 32]}>
            {data.items.map(((item, index) =>
                <Col xs={24} sm={12} md={4}
                  onMouseOver={() => setOpinionDebounced.run(index)}
                  onMouseOut={() => setOpinionDebounced.run(-1)}
                >
                  <IndexCommunityStarItem {...item} />
                </Col>
            ))}
          </Row>
        </div>
  
        <div className={classNames(styles.opinion, {[styles.opinion_hidden]: opinionIndex === -1})}>
          <div className={styles.opinion_quoto}>
            <div className={styles.opinion_quoto_left}>“</div>
            <div className={styles.opinion_quoto_right}>”</div>
          </div>
          <div>
            {data.items[opinionIndex]?.content ?? ''}
          </div>
        </div>
        
        {/*<Row justify="center">*/}
        {/*  <Col xs={24} sm={18}>*/}
        {/*    <div className={classNames(styles.opinion, {[styles.opinion_hidden]: opinionIndex === -1})}>*/}
        {/*      <div className={styles.opinion_quoto}>*/}
        {/*        <div className={styles.opinion_quoto_left}>“</div>*/}
        {/*        <div className={styles.opinion_quoto_right}>”</div>*/}
        {/*      </div>*/}
        {/*      <div>*/}
        {/*        {data.items[opinionIndex]?.content ?? ''}*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </Col>*/}
        {/*</Row>*/}
  
        <div className={styles.more}>
          <LinkWithArrow to="/stars" isOutbound={false}>
            VIEW MORE
          </LinkWithArrow>
        </div>
        
      </Container>
    </div>
  )
}

function IndexCommunityStarItem({imageUrl, name, summary, content}) {
  return (
    <div className={styles.list_item}>
      <div className={styles.list_item_image}>
        <img src={imageUrl} alt=""/>
      </div>
      <div className={styles.list_item_name}>
        {name}
      </div>
      <div className={styles.list_item_summary}>
        {summary}
      </div>
    </div>
  )
}

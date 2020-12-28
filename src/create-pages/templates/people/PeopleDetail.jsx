import React from 'react'
import styles from './PeopleDetail.module.scss'
import Section from "src/components/section/Section";
import Layout from "src/components/Layout";
import SEO from "src/components/SEO";
import Container from "src/components/Container/Container";
import Banner from "src/components/Banner/Banner";
import {Col, Row} from "antd";
import BoundLink from "src/components/BoundLink";

export default function PeopleDetail({ data, pageContext }) {
  const {members, type} = pageContext
  return (
    <Layout>
      <SEO
        title={type}
        description="description"
      />
  
      <Banner backgroundImage={'/images/home/banner.svg'} className={styles.banner}>
        <h1 className={styles.banner_title}>
          {type}
        </h1>
      </Banner>
  
      <div className={styles.wrapper}>
        <Container className={styles.container}>
          <div className={styles.summary}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem, blanditiis cum excepturi, explicabo facere impedit ipsum labore laboriosam nobis nulla optio perspiciatis placeat quo quod repudiandae soluta sunt tenetur?
          </div>
          <div className={styles.list}>
            <Section name="All Contributors">
              <Row gutter={[48, 48]} className={styles.items}>
                {members.map(item =>
                  <Col span={6}>
                    <Item {...item} />
                  </Col>
                )}
              </Row>
            </Section>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

function Item({githubName}) {
  return (
    <div className={styles.item}>
      <div className={styles.item_icon}>
        <img src={`https://github.com/${githubName}.png`} alt={githubName}/>
        {/*<div style={{width: 200, height: 200, backgroundColor: 'lightgray', margin: '0 auto'}}>avatar - {githubName}</div>*/}
      </div>
      <div className={styles.item_name}>
        <BoundLink href={`https://github.com/${githubName}`}>{githubName}</BoundLink>
      </div>
    </div>
  )
}

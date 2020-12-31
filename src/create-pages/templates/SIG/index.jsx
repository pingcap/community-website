import React from 'react'
import styles from './index.module.scss'
import Layout from "src/components/Layout";

import Section from "src/components/section/Section";
import SEO from "src/components/SEO";
import Container from "src/components/Container/Container";
import {Row, Col} from "antd";
import Banner from "src/components/Banner/Banner";
import {graphql, Link, useStaticQuery} from "gatsby";

export default function SIG({ data, pageContext}) {
  const imageData = useStaticQuery(
    graphql`
      query {
        banner: file(relativePath: { eq: "home/banner.svg" }) {
          publicURL
        }
      }
    `
  )
  
  const {items} = pageContext
  return (
    <Layout>
      <SEO
        title="SIG"
        description="Each SIG is comprised of members from multiple companies and organizations, with a common purpose of advancing the project with respect to a specific topic."
      />
  
      <Banner backgroundImage={imageData.banner.publicURL}>
        <h1 className={styles.title}>Special Interest Group</h1>
      </Banner>
  
      <div className={styles.wrapper}>
        <Container className={styles.container}>
          <div className={styles.summary}>
            The TiDB project is organized primarily into Special Interest Groups (SIG). Each SIG is comprised of members from multiple companies and organizations, with a common purpose of advancing the project with respect to a specific topic, such as Parser/Expression/Planner. Our goal is to enable a distributed decision structure and code ownership, as well as providing focused forums for getting work done, making decisions, and onboarding new contributors. Every identifiable subpart of the project (e.g., github org, repository, subdirectory, API, test, issue, PR) is intended to be owned by some SIG. For more details about sig governance, you can read this doc sig governance. And if you are new to tidb, and want to find a sig to start, this contribution map for sig may be helpful.
          </div>
          <Row className={styles.list}>
            <Col sm={24} md={16}>
              <Section name="All Special Interest Groups">
                {items.map(item => <SIGItem {...item} />)}
              </Section>
            </Col>
            <Col sm={24} md={8}>
              <Section name="Popular groups">
                Popular groups
              </Section>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

function SIGItem({name, info, createTime, updateTime}) {
  if (info === '' || info === null || info === undefined) {
    info = `There is no description of sig - ${name}`
  }
  return (
    <div className={styles.item}>
      <div className={styles.item_left}>
        <div className={styles.item_left_icon}>
          <img src="/images/TiDB-logo-red.svg" alt=""/>
        </div>
      </div>
      <div className={styles.item_right}>
        <div className={styles.item_right_title}>
          <Link to={`/SIG/${name}`}>{name}</Link>
        </div>
        <div className={styles.item_right_summary}>
          {info}
        </div>
      </div>
    </div>
  )
}

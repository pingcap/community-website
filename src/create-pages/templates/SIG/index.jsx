import React from 'react'
import styles from './index.module.scss'
import Layout from "src/components/Layout";

import Section from "src/components/section/Section";
import SEO from "src/components/SEO";
import Container from "src/components/Container/Container";
import {Space, Row, Col} from "antd";
import Banner from "src/components/Banner/Banner";
import {graphql, Link, useStaticQuery} from "gatsby";
import AvatarGrid from "src/components/AvatarGrid/AvatarGrid";

export default function SIG({ data, pageContext}) {
  const imageData = useStaticQuery(
    graphql`
      query {
        banner: file(relativePath: { eq: "banner-sig@1x.png" }) {
          publicURL
        }
        memberIcon: file(relativePath: { eq: "member-icon.svg" }) {
          publicURL
        }
      }
    `
  )
  
  const {items, sigSubMember} = pageContext
  console.log('pageContext', pageContext)
  console.log('template sigSubMember', sigSubMember)
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
            <h1>What is special interest group?</h1>
            <p>The TiDB project is organized primarily into Special Interest Groups (SIG). Each SIG is comprised of members from multiple companies and organizations, with a common purpose of advancing the project with respect to a specific topic, such as Parser/Expression/Planner.</p>

            <h1>Goal</h1>
            <p>Our goal is to enable a distributed decision structure and code ownership, as well as providing focused forums for getting work done, making decisions, and onboarding new contributors.</p>

            <h1>Scope</h1>
            <p>Every identifiable subpart of the project (e.g., github org, repository, subdirectory, API, test, issue, PR) is intended to be owned by some SIG.</p>

            <h1>Goverance</h1>
            <p>
              For more details about sig governance, you can read this doc <a href="https://github.com/pingcap/community/blob/master/governance/sig-governance.md">sig governance</a>.
              And if you are new to tidb, and want to find a sig to start, this <a href="https://github.com/pingcap/tidb-map/blob/master/maps/contribution-map.md#sig---special-interest-group">contribution map</a>
              for sig may be helpful.
            </p>
          </div>
          <Row gutter={[64, 64]} className={styles.list}>
            <Col sm={24} md={16}>
              <Section name="All Special Interest Groups">
                {items.map(item => <SIGItem {...item} imageData={imageData} sigSubMember={sigSubMember[item.id]} />)}
              </Section>
            </Col>
            <Col sm={24} md={8}>
              <Section name="Popular Groups">
                <Space size={[16, 16]} wrap className={styles.popular}>
                  {items.slice(0, 5).map(item => <SIGPopularItem>{item.name}</SIGPopularItem>)}
                </Space>
              </Section>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

function SIGItem({name, info, createTime, updateTime, imageData, sigSubMember, membersCount}) {
  if (info === '' || info === null || info === undefined) {
    info = `There is no description of sig - ${name}`
  }
  return (
    <div className={styles.item}>
      <div className={styles.item_left}>
        <div className={styles.item_left_icon}>
          <AvatarGrid members={sigSubMember}/>
        </div>
      </div>
      <div className={styles.item_right}>
        <div className={styles.item_right_header}>
          <div className={styles.item_right_header_title}>
            <Link to={`/SIG/${name}`}>{name}</Link>
          </div>
          <div className={styles.item_right_member_count}>
            <img src={imageData.memberIcon.publicURL} alt="membersCount"/> {membersCount}
          </div>
        </div>
        <div className={styles.item_right_summary}>
          {info}
        </div>
      </div>
    </div>
  )
}

function SIGPopularItem({children}) {
  return <Link to={`/SIG/${children}`} className={styles.popular_item}>{children}</Link>
}

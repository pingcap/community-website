import React from 'react'
import styles from './detail.module.scss'
import Section from "src/components/section/Section";
import Layout from "src/components/Layout";
import SEO from "src/components/SEO";
import Banner from "src/components/Banner/Banner";
import Container from "src/components/Container/Container";
import BoundLink from "src/components/BoundLink";
import {graphql, useStaticQuery} from "gatsby";
import GitHubUserItem from "src/components/GithubUserItem/GitHubUserItem";
import {Row, Col} from "antd";

export default function Detail({ data, pageContext }) {
  const imageData = useStaticQuery(
    graphql`
    query {
      banner: file(relativePath: { eq: "home/banner.svg" }) {
        publicURL
      }
    }
    `
  )
  
  const {name, sigUrl, channel, apiData} = pageContext
  
  let memberNode = []
  const {membership} = apiData
  for (const membershipKey in membership) {
    memberNode.push(...membership[membershipKey].map(item =>
      <Col span={6}>
        <GitHubUserItem {...item} />
      </Col>
    ))
  }
  
  // const memberNode =
  
  return (
    <Layout>
      <SEO
        title={`${name} - SIG`}
        description="description"
      />
      
      <Banner backgroundImage={imageData.banner.publicURL} className={styles.banner}>
        <h1 className={styles.banner_title}>
          {name}
        </h1>
        <div className={styles.banner_action}>
          <div className={styles.banner_action_github}>
            <BoundLink href={sigUrl}>GitHub Link</BoundLink>
          </div>
          <div className={styles.banner_action_slack}>
            <BoundLink href={channel}>Join Slack</BoundLink>
          </div>
        </div>
      </Banner>
      
      <div className={styles.wrapper}>
        <Container className={styles.container}>
          <div className={styles.learning_materials}>
            <Section name="LearningMaterials">
              LearningMaterials
            </Section>
          </div>
          <div className={styles.members}>
            <Section name="Members">
              <Row gutter={[48, 48]} className={styles.items}>
                {memberNode}
              </Row>
            </Section>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

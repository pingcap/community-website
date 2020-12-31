import React from 'react'
import styles from './detail.module.scss'
import Section from "src/components/section/Section";
import Layout from "src/components/Layout";
import SEO from "src/components/SEO";
import Banner from "src/components/Banner/Banner";
import Container from "src/components/Container/Container";
import {graphql, Link, useStaticQuery} from "gatsby";
import GitHubUserItem from "src/components/GithubUserItem/GitHubUserItem";
import {Row, Col} from "antd";
import Button from "src/components/Button";

export default function Detail({ data, pageContext }) {
  const imageData = useStaticQuery(
    graphql`
    query {
      banner: file(relativePath: { eq: "home/banner.svg" }) {
        publicURL
      }
      slack: file(relativePath: { eq: "home/button-icon-slack.svg" }) {
        publicURL
      }
      sub: file(relativePath: { eq: "home/button-icon-sub.svg" }) {
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
          <Button
            className={styles.banner_action_github}
            icon={<img src={imageData.slack.publicURL} alt="slack"/>}
            type="text"
            size="small"
            as={Link}
            href={sigUrl}
          >
            GitHub Link
          </Button>
          <Button
            className={styles.banner_action_slack}
            icon={<img src={imageData.sub.publicURL} alt="subgroups"/>}
            type="text"
            size="small"
            as={Link}
            href={channel}
          >
            Join Slack
          </Button>
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

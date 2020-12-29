import React from 'react'
import styles from './detail.module.scss'
import Section from "src/components/section/Section";
import Layout from "src/components/Layout";
import SEO from "src/components/SEO";
import Banner from "src/components/Banner/Banner";
import Container from "src/components/Container/Container";
import BoundLink from "src/components/BoundLink";
import {graphql, useStaticQuery} from "gatsby";

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
  
  const {name, sigUrl, channel} = pageContext
  return (
    <Layout>
      <SEO
        title="Detail"
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
          <LearningMaterials/>
          <div className={styles.members}>
            <Section name="Members">
              Members
            </Section>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

function LearningMaterials() {
  return (
    <div className={styles.learning_materials}>
      <Section name="LearningMaterials">
        LearningMaterials
      </Section>
    </div>
  )
}

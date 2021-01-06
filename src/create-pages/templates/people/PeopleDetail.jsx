import React from 'react'
import styles from './PeopleDetail.module.scss'
import Section from "src/components/section/Section";
import Layout from "src/components/Layout";
import SEO from "src/components/SEO";
import Container from "src/components/Container/Container";
import Banner from "src/components/Banner/Banner";
import {Col, Row} from "antd";
import GitHubUserItem from "src/components/GithubUserItem/GitHubUserItem";
import {graphql, useStaticQuery} from "gatsby";
import {convertToUpperCamelCase} from 'src/helper'

export default function PeopleDetail({ data, pageContext }) {
  const imageData = useStaticQuery(
    graphql`
      query {
        banner: file(relativePath: { eq: "home/banner.svg" }) {
          publicURL
        }
      }
    `
  )
  
  const {members, type, graphqlData} = pageContext
  
  const summaryNode = graphqlData.data.summary ? (
    <div
      className={styles.markdown}
      dangerouslySetInnerHTML={{ __html: graphqlData.data.summary.html }}
    />
  ) : (
    <div
      className={styles.markdown}
    >
      There is no description of this people type.
    </div>
  )
  
  return (
    <Layout>
      <SEO
        title={type}
        description="description"
      />
  
      <Banner backgroundImage={imageData.banner.publicURL} className={styles.banner}>
        <h1 className={styles.banner_title}>
          {convertToUpperCamelCase(type)}
        </h1>
      </Banner>
  
      <div className={styles.wrapper}>
        <Container className={styles.container}>
          <div className={styles.summary}>
            {summaryNode}
          </div>
          <div className={styles.list}>
            <Section name={`All ${convertToUpperCamelCase(type)}s`}>
              <Row gutter={[48, 48]} className={styles.items}>
                {members.map(item =>
                  <Col span={6}>
                    <GitHubUserItem {...item} />
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



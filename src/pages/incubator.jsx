import SEO from "src/components/SEO";
import React from "react";
import Layout from "src/components/Layout";
import styles from "./incubator.module.scss";
import Banner from "src/components/Banner/Banner";
import {graphql, useStaticQuery} from "gatsby";
import Container from "src/components/Container/Container";

export default function Incubator() {
  const imageData = useStaticQuery(
    graphql`
    query {
      banner: file(relativePath: { eq: "banner-sig-detail@1x.png" }) {
        publicURL
      }
      summary: markdownRemark(fileAbsolutePath: {regex: "//en/TiDBIncubatorProgram.md$/"}) {
        html
      }
    }
    `
  )
  return (
    <Layout>
      <SEO
        title="Incubator"
        description="TiDB Incubator Program is inspired by the CNCF incubating process. The process is designed to ensure that new projects have correct licensing, up-to-date boilerplate documents, a healthy community process, and are developed using accepted TiDB Community practices."
      />
      
      <Banner backgroundImage={imageData.banner.publicURL}>
        <h1 className={styles.title}>TiDB Incubator Program</h1>
      </Banner>
  
      <div className={styles.wrapper}>
        <Container className={styles.container}>
          <div
            className={styles.markdown}
            dangerouslySetInnerHTML={{ __html: imageData.summary.html }}
          />
        </Container>
      </div>
    
    </Layout>
  )
}

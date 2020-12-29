import React from 'react'
import styles from './ranking.module.scss'
import Layout from "src/components/Layout";
import SEO from "src/components/SEO";
import Banner from "src/components/Banner/Banner";
import {graphql, useStaticQuery} from "gatsby";
// import {useIntl} from "react-intl";

export default function Ranking() {
  const imageData = useStaticQuery(
    graphql`
      query {
        banner: file(relativePath: { eq: "home/banner.svg" }) {
          publicURL
        }
      }
    `
  )
  
  return (
    <Layout>
      <SEO
        title="Ranking !"
        description="TiDB DevGroup rankings"
      />
  
      <Banner backgroundImage={imageData.banner.publicURL}>
        <h1 className={styles.title}>Ranking</h1>
      </Banner>
  
      <div className={styles.wrapper}>
        <div className="container">
          Ranking
        </div>
      </div>
    </Layout>
  )
}

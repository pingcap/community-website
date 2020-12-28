import React from 'react'
import styles from './ranking.module.scss'
import Layout from "src/components/Layout";
import SEO from "src/components/SEO";
import Banner from "src/components/Banner/Banner";
// import {useIntl} from "react-intl";

export default function Ranking() {
  return (
    <Layout>
      <SEO
        title="Ranking !"
        description="TiDB DevGroup rankings"
      />
  
      <Banner backgroundImage={'/images/home/banner.svg'}>
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

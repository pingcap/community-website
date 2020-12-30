import React from 'react'
import styles from './ranking.module.scss'
import Layout from "src/components/Layout";
import SEO from "src/components/SEO";
import Banner from "src/components/Banner/Banner";
import {graphql, useStaticQuery} from "gatsby";
import Container from "src/components/Container/Container";
import {Button, Table} from "antd";
import {Link} from "gatsby";

export default function Ranking({ data, pageContext }) {
  const imageData = useStaticQuery(
    graphql`
      query {
        banner: file(relativePath: { eq: "home/banner.svg" }) {
          publicURL
        }
      }
    `
  )
  
  const {apiData} = pageContext
  
  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: 'Coder Name',
      dataIndex: 'githubName',
      key: 'githubName',
      // render: text => <a>{text}</a>,
    },
    {
      title: 'PR',
      dataIndex: 'prCount',
      key: 'prCount',
      // render: text => <a>{text}</a>,
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
      // render: text => <a>{text}</a>,
    },
    {
      title: 'SIG',
      dataIndex: 'sigs',
      key: 'sigs',
      // render: text => <span>{
      //   text.split(',').map(item =>
      //     <Link to={`/SIG/${item}`}><Button size={'small'}>{item}</Button></Link>
      //   )
      // }</span>,
    },
  ]
  
  const tableData = apiData.contributions
  console.log('tableData', tableData)
  
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
        <Container className={styles.container}>
          <div className={styles.table}>
            <Table
              bordered
              columns={columns}
              dataSource={tableData}
            />
          </div>
        </Container>
      </div>
    </Layout>
  )
}

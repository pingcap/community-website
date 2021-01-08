import React, {useState} from 'react'
import styles from './ranking.module.scss'
import Layout from "src/components/Layout";
import SEO from "src/components/SEO";
import Banner from "src/components/Banner/Banner";
import {graphql, useStaticQuery} from "gatsby";
import Container from "src/components/Container/Container";
import {Button, Space, Table} from "antd";
import {Link, navigate} from "gatsby";
import BoundLink from "src/components/BoundLink";
import RadioButton from "src/components/RadioButton/RadioButton";
import _ from 'lodash'

export default function Ranking({ data, pageContext, location }) {
  const graphqlData = useStaticQuery(
    graphql`
      query {
        banner: file(relativePath: { eq: "banner-ranking@2x.png" }) {
          publicURL
        }
        rankingDescription: markdownRemark(fileAbsolutePath: {regex: "//ranking.md$/"}) {
          html
        }
      }
    `
  )
  
  const [sortedInfo, setSortedInfo] = useState({
    order: 'descend',
    columnKey: 'prCount',
  })
  
  const setSortedColumn = (columnKey) => setSortedInfo({
    order: 'descend',
    columnKey,
  })
  
  const {apiData} = pageContext
  
  const duration = location.pathname.substr('/ranking/'.length)
  const [showType, setShowType] = useState('prCount')
  
  const columnValue = showType === 'prCount' ? {
    title: 'Pull Request',
    dataIndex: 'prCount',
    key: 'prCount',
    sorter: (a, b) => a.prCount - b.prCount,
    sortOrder: sortedInfo.columnKey === 'prCount' && sortedInfo.order,
    defaultSortOrder: 'descend',
  } : {
    title: 'Score',
    dataIndex: 'score',
    key: 'score',
    sorter: (a, b) => a.score - b.score,
    sortOrder: sortedInfo.columnKey === 'score' && sortedInfo.order,
    defaultSortOrder: 'descend',
  }
  
  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
      // render: (text, record, index) => index + 1,
    },
    {
      title: 'Coder Name',
      dataIndex: 'githubName',
      key: 'githubName',
      render: text => <Space>
        <BoundLink href={`https://github.com/${text}`}>
          <img className={styles.avatar} src={`/cache/github-avatar/${text}.png`} alt={text}/>
          <span className={styles.username}>{text}</span>
        </BoundLink>
      </Space>,
    },
    columnValue,
    {
      title: 'SIG',
      dataIndex: 'sigs',
      key: 'sigs',
      render: text =>
        <Space>
          {text?.split(',').map(item =>
              <Link to={`/SIG/${item}`}><Button size={'small'}>{item}</Button></Link>
          )}
        </Space>
    },
  ]
  
  const parsedData = apiData.contributions.map(item => ({...item, prCount: parseInt(item.prCount), score: parseInt(item.score), }))
  
  const prData = _.orderBy(parsedData, ['prCount'], ['desc']).map((item, index) => ({...item, no: index + 1}))
  const scoreData = _.orderBy(parsedData.filter(contribution => !!contribution.score), ['score'], ['desc']).map((item, index) => ({...item, no: index + 1}))
  
  const tableData = showType === 'prCount' ? prData : scoreData
  
  return (
    <Layout>
      <SEO
        title="Ranking !"
        description="TiDB DevGroup rankings"
      />
  
      <Banner backgroundImage={graphqlData.banner.publicURL}>
        <h1 className={styles.title}>Ranking</h1>
      </Banner>
      
      <div className={styles.wrapper}>
        <Container className={styles.container}>
          <div className={styles.summary} dangerouslySetInnerHTML={{ __html: graphqlData.rankingDescription.html }} />
          <Space size={[48, 0]} className={styles.toolbar}>
            <Space size={[16, 0]}>
              <div className={styles.toolbar_label}>Period</div>
              <RadioButton
                options={[
                  {label: '1 Week', value: 'week'},
                  {label: '1 Month', value: 'month'},
                  {label: '1 Year', value: 'year'},
                  {label: 'All', value: ''},
                ]}
                value={duration}
                onChange={(option) => {
                  // setShowDuration(option.value)
                  navigate(`/ranking/${option.value}`)
                }}
              />
            </Space>
            <Space size={[16, 0]}>
              <div className={styles.toolbar_label}>Order By</div>
              <RadioButton
                options={[
                  {label: 'Pull Request', value: 'prCount'},
                  {label: 'Score', value: 'score'},
                ]}
                value={showType}
                onChange={(option) => {
                  setSortedColumn(option.value)
                  setShowType(option.value)
                }}
              />
            </Space>
          </Space>
          
          <div className={styles.table}>
            <Table
              // bordered
              columns={columns}
              dataSource={tableData}
              pagination={{
                pageSize: 100,
              }}
            />
          </div>
        </Container>
      </div>
    </Layout>
  )
}

import React, {useState} from 'react'
import styles from './ranking.module.scss'
import Layout from "src/components/Layout";
import SEO from "src/components/SEO";
import Banner from "src/components/Banner/Banner";
import {graphql, useStaticQuery} from "gatsby";
import Container from "src/components/Container/Container";
import {Button, Space, Table} from "antd";
import {Link} from "gatsby";
import BoundLink from "src/components/BoundLink";
import RadioButton from "src/components/RadioButton/RadioButton";

export default function Ranking({ data, pageContext }) {
  const imageData = useStaticQuery(
    graphql`
      query {
        banner: file(relativePath: { eq: "banner-ranking@2x.png" }) {
          publicURL
        }
      }
    `
  )
  
  const [filter, setFilter] = useState('week')
  const [sort, setSort] = useState('pr')
  
  const {apiData} = pageContext
  
  const columnValue = sort === 'pr' ? {
    title: 'Pull Request',
    dataIndex: 'prCount',
    key: 'prCount',
    // render: text => <a>{text}</a>,
  } : {
    title: 'Score',
    dataIndex: 'score',
    key: 'score',
    // render: text => <a>{text}</a>,
  }
  
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
      render: text => <Space>
        <BoundLink href={`https://github.com/${text}`}>
          <img className={styles.avatar} src={`https://github.com/${text}.png`} alt={text}/>
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
  
  const tableData = apiData.contributions
  // console.log('tableData', tableData)
  
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
          <div className={styles.summary}>
            Contributions to TiDB，including Pull Requests and TiDB Challenge Score.
          </div>
          <Space size={[36, 0]} className={styles.toolbar}>
            {/*<Radio.Group*/}
            {/*  options={[*/}
            {/*    {name: 'Week', value: 'week'},*/}
            {/*    {name: 'Month', value: 'month'},*/}
            {/*    {name: 'Year', value: 'year'},*/}
            {/*    {name: 'History List', value: 'history_list'},*/}
            {/*  ]}*/}
            {/*  value={'week'}*/}
            {/*  onChange={(option) => console.log('filter', option)}*/}
            {/*/>*/}
            {/*<Radio.Group*/}
            {/*  options={[*/}
            {/*    {name: 'Pull Request', value: 'pr'},*/}
            {/*    {name: 'Score', value: 'score'},*/}
            {/*  ]}*/}
            {/*  selected={'score'}*/}
            {/*  onChange={(option) => console.log('sort', option)}*/}
            {/*/>*/}
            <RadioButton
              options={[
                {label: 'Week', value: 'week'},
                {label: 'Month', value: 'month'},
                {label: 'Year', value: 'year'},
                {label: 'History List', value: 'history_list'},
              ]}
              value={filter}
              onChange={(option) => setFilter(option.value)}
            />
            <RadioButton
              options={[
                {label: 'Pull Request', value: 'pr'},
                {label: 'Score', value: 'score'},
              ]}
              value={sort}
              onChange={(option) => setSort(option.value)}
            />
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

const path = require('path')
const axios = require('axios')

module.exports = async ({ graphql, createPage, createRedirect }) => {
  const component = path.resolve(`${__dirname}/templates/people/PeopleDetail.jsx`)
  const urlPrefix = '/people'
  
  const people = ['committer', 'reviewer', 'active-contributor']
  for (const item of people) {
    const api = `https://bots.tidb.io/ti-community-bot/members?level=${item}`
    const response = await axios.get(api)
    const members = response.data.data.members || []
  
    const url = `${urlPrefix}/${item}`
  
    const graphqlData = await graphql(`
      query {
        summary: markdownRemark(fileAbsolutePath: {regex: "/${item}/"}) {
          html
        }
      }
    `)
    
    createPage({
      path: url,
      component,
      context: {
        type: item,
        members,
        graphqlData,
      },
    })
  }
  
  
  console.log('fetch contributors')
  const item = 'contributor'
  const api = `https://bots.tidb.io/ti-community-bot/contributors?pageSize=20&current=1`
  const response = await axios.get(api)
  const url = `${urlPrefix}/contributor`

  const graphqlData = await graphql(`
      query {
        summary: markdownRemark(fileAbsolutePath: {regex: "/${item}/"}) {
          html
        }
      }
    `)

  const members = response.data.data.contributors || []
  createPage({
    path: url,
    component,
    context: {
      type: item,
      members,
      graphqlData,
    },
  })
  
  
  console.log('fetch maintainers')
  const graphqlDataMaintainer = await graphql(`
      query {
        summary: markdownRemark(fileAbsolutePath: {regex: "/maintainer/"}) {
          html
        }
      }
    `)
  const urlMaintainer = `${urlPrefix}/maintainer`
  const responseMaintainer = require('../data/people/maintainers.json')
  const membersMaintainer = responseMaintainer.data.members || []
  createPage({
    path: urlMaintainer,
    component,
    context: {
      type: 'maintainer',
      members: membersMaintainer,
      graphqlData: graphqlDataMaintainer,
    },
  })
  
}

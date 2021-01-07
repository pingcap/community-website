const path = require('path')
const axios = require('axios')
const {cacheGitHubAvatar} = require("./apiHelper");

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
        summary: markdownRemark(fileAbsolutePath: {regex: "//${item}.md$/"}) {
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
        summary: markdownRemark(fileAbsolutePath: {regex: "//${item}.md$/"}) {
          html
        }
      }
    `)

  const members = response.data.data.contributors || []
  
  await cacheGitHubAvatar(members.map(member => member.githubName))
  
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
  const itemMaintainer = 'maintainer'
  const graphqlDataMaintainer = await graphql(`
      query {
        summary: markdownRemark(fileAbsolutePath: {regex: "//${itemMaintainer}.md$/"}) {
          html
        }
      }
    `)
  const urlMaintainer = `${urlPrefix}/maintainer`
  const responseMaintainer = require('../data/people/maintainers.json')
  const membersMaintainer = responseMaintainer.data.members || []
  
  await cacheGitHubAvatar(membersMaintainer.map(member => member.githubName))
  
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

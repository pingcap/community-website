const path = require('path')
const axios = require('axios')
const apiHelper = require('./apiHelper')

module.exports = async ({ graphql, createPage, createRedirect }) => {
  
  const component = path.resolve(`${__dirname}/templates/SIG/index.jsx`)
  const urlPrefix = '/SIG'
  const url = `${urlPrefix}`
  
  const api = 'https://bots.tidb.io/ti-community-bot/sigs'
  const response = await axios.get(api)
  const items = response.data.data.sigs || []
  
  console.log('items', items)
  const sigSubMember = {}
  for (const item of items) {
    const {id} = item
    const gitHubNames = await apiHelper.getGitHubNamesBySigId(id)
    sigSubMember[id] = gitHubNames
  }
  console.log('create sigSubMember', sigSubMember)
  
  createPage({
    path: url,
    component,
    context: {
      items,
      sigSubMember,
    },
  })
  
  for (const item of items) {
    const component = path.resolve(`${__dirname}/templates/SIG/detail.jsx`)
    const url = `${urlPrefix}/${item.name}`
    const api = `https://bots.tidb.io/ti-community-bot/sigs/${item.name}`
  
    const graphqlData = await graphql(`
      query {
        summary: markdownRemark(fileAbsolutePath: {regex: "//${item.name}.md$/"}) {
          html
        }
      }
    `)
    
    try {
      const response = await axios.get(api)
      console.log(item.name, response.data.status)
      const apiData = response.data.data || {}
  
      for (const membershipKey in apiData.membership) {
        const membershipValue = apiData.membership[membershipKey]
        await apiHelper.cacheGitHubAvatar(membershipValue.map(member => member.githubName))
      }
    
      createPage({
        path: url,
        component,
        context: {
          ...item,
          apiData,
          graphqlData,
        },
        data: graphqlData,
      })
    } catch (e) {
      console.error('download SIG detail error', item.name)
    }
  }
}


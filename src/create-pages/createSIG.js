const path = require('path')
const axios = require('axios')

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
    const gitHubNames = await getGitHubNamesBySigId(id)
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
    
    try {
      const response = await axios.get(api)
      console.log(item.name, response.data.status)
      const apiData = response.data.data || {}
    
      createPage({
        path: url,
        component,
        context: {
          ...item,
          apiData,
        },
      })
    } catch (e) {
      console.error('download SIG detail error', item.name)
    }
  }
}

async function getGitHubNamesBySigId(sigId) {
  try {
    const apiMember = `https://bots.tidb.io/ti-community-bot/members?sigId=${sigId}`
    const responseMember = await axios.get(apiMember)
    const dataMember = responseMember.data.data || {}
    const {members} = dataMember
    const subMember = members.slice(0, 8)
    const subMemberUsernames = subMember.map(member => member.githubName)
    return subMemberUsernames
  } catch (e) {
    console.error('getGitHubNamesBySigId error, ', sigId)
    return []
  }
}

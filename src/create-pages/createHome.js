
const apiHelper = require('./apiHelper')

const path = require('path')
const axios = require('axios')

module.exports = async ({ graphql, createPage, createRedirect }) => {
  const component = path.resolve(`${__dirname}/templates/home/index.jsx`)
  
  const api = `https://bots.tidb.io/ti-community-bot/sigs/`
  const response = await axios.get(api)
  const data = response.data.data || {}
  
  const {sigs} = data
  
  const sigSubMemberNames = {}
  const sigTop = sigs.slice(0, 4)
  for (const sig of sigTop) {
    const {id} = sig
    const gitHubNames = await apiHelper.getGitHubNamesBySigId(id)
    console.log('gitHubNames in createHome', gitHubNames)
    sigSubMemberNames[id] = gitHubNames
  }
  console.log('create sigSubMemberNames in createHome', sigSubMemberNames)
  
  const url = `/`
  
  const sigTopItems = sigTop.map(item => {
    return {
      title: item.name,
      summary: item.info,
      sigSubMemberNames: sigSubMemberNames[item.id]
    }
  })
  
  const apiCommunityStar = `https://bots.tidb.io/ti-community-bot/members?level=committer&pageSize=4&current=1`
  const responseCommunityStar = await axios.get(apiCommunityStar)
  const dataCommunityStar = responseCommunityStar.data.data || {}
  const itemsCommunityStar = dataCommunityStar.members
  
  createPage({
    path: url,
    component,
    context: {
      sigTop: sigTopItems,
      itemsCommunityStar,
    },
  })
  
}
